import bcrypt from "bcryptjs";
import dotenv from "dotenv"
dotenv.config()
import prisma from "../config/prisma.js"
import { findByEmail } from "../repositories/auth.repositories.js";
import { sendShopkeeperCredentials } from "./email.service.js";

export const createShopService = async(data)=>{
    const password = Math.random().toString(36).slice(-8);
    const {email}= data
    const existshopkeeper = await findByEmail(email);
    if(existshopkeeper){
        throw new Error(`Shopkeeper already registered, Name: ${existshopkeeper.name} and shopid is ${existshopkeeper.shopId}`)
    }
    
    const hashedPassword = await bcrypt.hash(password,10);

    const result= prisma.$transaction(async(tx)=>{
        const shop = await prisma.shop.create({
        data:{
            shopName : data.shopName,
            ownerName: data.ownerName,
            email:data.email,
            mobile:data.mobile,
            CountryId:Number(data.CountryId),
            cityId :Number(data.cityId),
            stateId:Number(data.stateId),
            Pincode :Number(data.Pincode),
            Address:data.Address
        }
    });
    const user = await prisma.user.create({
        data:{
            name:data.ownerName,
            email:data.email,
            password:hashedPassword,
            shopId:shop.id
        }

    })
    

    })
    await sendShopkeeperCredentials(data.email,password)
    return result
    
}