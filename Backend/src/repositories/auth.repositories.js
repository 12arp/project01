import prisma from '../../prisma/client.js'

export const findByEmail = async(email)=>
{
    const db = prisma
    return db.user.findUnique({
        where:{email}
    });
}

// export const create = (data,tx)=>{
//     return tx.user.create({data})
// }
