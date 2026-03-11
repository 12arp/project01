import { createBillService } from "../services/bill.service.js";

export const createBill = async(req,res)=>{
    try{
        const result = await createBillService(req.body,req.user)
        res.status(201).json(result)
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}