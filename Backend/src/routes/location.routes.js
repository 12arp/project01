import express from "express"


import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

const router = express.Router();

router.get("/countries",async(req,res)=>{
    try{
        const countries = await prisma.country.findMany();
        res.json({
            success:true,
            data:countries
        })
    }catch(err){
        res.status(500).json({
            error: err.message
        })
    }
})


router.get("/states/:countryId",async(req,res)=>{
    const {countryId}=req.params;
    try{
        const states = await prisma.state.findMany({
            where:{
                CountryId:Number(countryId)
            }
        });
        res.json({
            success:true,
            data:states
        })
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
})
// finding cities
router.get("/cities/:stateId",async(req,res)=>{
    const {stateId}=req.params;
    try{
        const cities = await prisma.city.findMany({
            where:{
                stateId:Number(stateId)
            }
        });
        res.json({
            success:true,
            data:cities
        })
    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
})

export default router