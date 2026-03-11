import express from "express"
import { createShop } from "../controllers/shop.controller.js"
import { authenticate } from '../middleware/auth.middleware.js';
import { authorizerole } from '../middleware/role.middleware.js';

const router = express.Router();
router.post("/create-shop",authenticate,authorizerole("ADMIN"),createShop);
export default router;