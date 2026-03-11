import prisma from "../config/prisma.js"

export const createBillService = async(data,user)=>{

const {customerId,discount=0,paymentMethod,items} = data

const shopId = user.shopId
const userId = user.id

return await prisma.$transaction(async(tx)=>{

let subtotal = 0

for(const item of items){
subtotal += item.price * item.quantity
}

const taxAmount = 0
const totalAmount = subtotal - discount + taxAmount

const lastBill = await tx.bill.findFirst({
where:{shopId},
orderBy:{id:"desc"}
})

let invoiceNumber = "INV-0001"

if(lastBill){
const num = parseInt(lastBill.invoiceNumber.split("-")[1]) + 1
invoiceNumber = `INV-${num.toString().padStart(4,"0")}`
}

const bill = await tx.bill.create({
data:{
invoiceNumber,
shopId,
userId,
customerId,
discount,
taxAmount,
paymentMethod,
totalAmount
}
})

for(const item of items){

await tx.billItem.create({
data:{
billId:bill.id,
productId:item.productId,
quantity:item.quantity,
price:item.price,
total:item.price * item.quantity
}
})

await tx.product.update({
where:{id:item.productId},
data:{
stock:{
decrement:item.quantity
}
}
})

}

return {
message:"Bill generated successfully",
billId:bill.id,
invoiceNumber
}

})

}