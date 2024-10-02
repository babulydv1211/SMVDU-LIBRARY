import mongoose from "mongoose"
const bookScheme=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
//ab ye Schema ka ek model define krna h
const Book=mongoose.model("Book",bookScheme)
export default Book;