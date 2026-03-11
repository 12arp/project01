import prisma from "../config/prisma.js"

export const createProductService = async(data,user)=>{
    if(user.role !== "SHOPKEEPER"){
        throw new Error("Only shopkeeper can addproducts")
    }

    const product = await prisma.product.create({
        data:{
            name:data.name,
            barcode:data.barcode,
            price:Number(data.price),
            stock:Number(data.stock),
            colour: data.colour || undefined, 
            shopId:user.shopId

        }
    })
    return product
}