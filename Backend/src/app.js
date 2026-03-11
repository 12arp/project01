import express from 'express'
import cors from "cors"
import listEndpoints from 'express-list-endpoints';
const app = express();
app.use(express.json());
import authRoutes from "./routes/authRoutes.js";
import shoproutes from "./routes/shop.routes.js";
import locationroutes from "./routes/location.routes.js"
import Productrotes  from "./routes/products.routes.js"
import Billgenerate  from "./routes/bill.routes.js"


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api",authRoutes);
app.use("/api/admin",shoproutes)
app.use("/api/location",locationroutes)
app.use("/api/product",Productrotes)
app.use("/api/bill",Billgenerate)

// app.get("/routes",(req,res)=>{
//     res.json(listEndpoints(app))
// })
export default app;