import mongoose from "mongoose";

const bookSchema= new mongoose.Schema({
    name:{type:String,unique:true},
    email:String,
    phn:String,
    mplan:String,
    payment:String,
    description:String,
})
const Booking =mongoose.model('Booking Details',bookSchema)

export default Booking