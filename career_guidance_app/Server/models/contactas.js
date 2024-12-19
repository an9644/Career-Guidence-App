import mongoose from "mongoose";

const contactSchema= new mongoose.Schema({
    name:{type:String,unique:true},
    email:String,
    message:String,
})
const Contactus =mongoose.model('Contact Details',contactSchema)

export default Contactus