//  for registrtion
import {registerUser,loginuser} from "../services/auth.service.js"
export const register = async (req,res)=>{
    try{
        const user = await registerUser(req.body);
        res.status(201).json({
            success:true,
           message: "User registerd Successfully"
        });
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

export const login = async(req,res)=>{
    try{
        const {user,token} = await loginuser(req.body);
        res.status(200).json({
            success:true,
            message:"Login Successfully",
            role:user.role,
            name:user.name,
            token,
            email:user.email,
            
        });
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}
