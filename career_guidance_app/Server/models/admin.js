import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    userName: { type: String, unique: true },
    password: { type: String, required: true },
    userType: { type: String, default: "admin" },
  email: String,
  phoneNumber: String,
  address: {
    address: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
  },
})
const Admin = mongoose.model('Admin Details', adminSchema)

export default Admin