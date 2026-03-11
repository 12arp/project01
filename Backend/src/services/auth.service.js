import bcrypt from "bcryptjs"
import prisma from "../../prisma/client.js"
import {findByEmail} from '../repositories/auth.repositories.js'
import jwt from 'jsonwebtoken'
import "dotenv/config"

// Registration for User
export const registerUser = async (data) => {
  const { name, email, password } = data;
 const existingUser = await findByEmail(email);
 if (existingUser) {
      throw new Error("User already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
  // using DB Transaction
  return await prisma.$transaction(async(tx) => {
   
    const user = await tx.user.create({
      data: {

        name,
        email,
        password: hashedPassword,
        
        isActive: true,
        
      },
    });
    

    
    return user;
  });
};

// Login for Admin

export const loginuser = async(data)=>{
  const {email,password}=data;
  const user = await findByEmail(email);
  if(!user){
    throw new Error("User not found")
  }
  if(!user.isActive){
    throw new Error("User is blocked or inactive")
  }
  
  const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch){
    throw new Error("Wrong Password")
  }
  const token = jwt.sign({
    id:user.id,
    role:user.role,
    email:user.email,
    shopId:user.shopId
    
  },
  process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES
  }

)
  return {user,token};
}

