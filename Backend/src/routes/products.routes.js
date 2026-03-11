import express from 'express'
import { createProduct } from '../controllers/product.controller.js'

import {authenticate} from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/add",authenticate,createProduct);

export default router;