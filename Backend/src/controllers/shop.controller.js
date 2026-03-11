import {createShopService} from '../services/shop.service.js'

export const createShop = async(req,res)=>{
    try{
         await createShopService(req.body);
        res.json({
            message:"Shop Created and User will be acknowledged via email",
            login:{
                email:req.body.email,
                password:req.body.password
            }
        })
    }catch(shoperr){
        res.status(500).json({
            shoperr:shoperr.message
        })
    }
}

