import prisma from './src/config/prisma.js'
import app from "./src/app.js"

const PORT  = 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

async function testConnection(){
    try{
        await prisma.$connect();
        console.log("Database connected")
    }catch(err){
        console.log(err);
        
    }
}
testConnection();