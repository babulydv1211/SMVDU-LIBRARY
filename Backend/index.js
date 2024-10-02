import express from "express" //ye import likhne ke liye package.json min "type":"module" ka use krna prta h 
import dotenv from "dotenv"   //agar aap type module use nhi krna chate h to require use kr skte h
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
const server=express();

server.use(cors());
server.use(express.json());

dotenv.config();

const PORT=process.env.PORT ||4000
const URI=process.env.MongoDBURI;
//connect to mongodb
try{
   mongoose.connect(URI,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
   });
   console.log("connected to mongoDB")
} catch(error){
   console.log("Error",error)
}
//defining route
server.use('/book',bookRoute);
server.use("/user",userRoute);


server.listen(PORT,()=>{
    console.log(`This server is running on the port ${PORT}`);
});

