import { createProductService } from "../services/product.service.js";
import { Prisma } from "@prisma/client"; 

export const createProduct = async (req, res) => {
    try {
        const product = await createProductService(req.body, req.user);
        res.status(201).json({
            product,
            message:"Product added"
           
        });
    } catch (err) {
        
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
    
            if (err.code === 'P2002') {
                return res.status(400).json({
                    
                    message: `The product "${req.body.name}" is already in your inventory.`
                });
            }
        }

        // 4. Fallback for other errors (like "Only shopkeeper can add...")
        res.status(400).json({
            message: err.message || "Something went wrong"
        });
    }
};
