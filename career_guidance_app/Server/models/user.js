import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userType: { type: String, default: 'user' },
  email: String,
  phoneNumber: String,
  address: {
    address:String,
    city: String,
    state: String,
    pincode: String,
    country: String,
  },
  education: {
    degree: String,
    fieldOfStudy: String,
    university: String,
    graduationYear: String,
  },
  qualifications: {
    certification: String,
    skills: String,
    language: String,
    other: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;