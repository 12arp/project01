import express from "express"
import {createBill} from "../controllers/bill.controller.js"
import {authenticate} from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/generate",authenticate,createBill);

export default router;
