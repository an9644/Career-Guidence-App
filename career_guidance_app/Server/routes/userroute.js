import { Router } from "express";
import { authenticate } from "../Middleware/auth.js";
import dotenv from 'dotenv';
import User from "../models/user.js";
import Booking from "../models/booking.js";
import Contactus from "../models/contactas.js";

dotenv.config()
const userRoute=Router();



userRoute.post('/booksession',authenticate,async(req,res)=>{  
    try{
        if(req.userType=='user'){      
            console.log("User login success")   

         const {Name,Email,Phn,Mplan,Payment,Description}=req.body                     

        const existingbook= await Booking.findOne({name : Name})                        
        if(existingbook){
            console.log("Booking already exists!!")
            return res.status(400).json({message:"  Booking already exists!!"})
         }                      
            //creating new course
            const newbooking=new Booking({
                name:Name,
                email:Email,
                phn:Phn,
                mplan:Mplan,
                payment:Payment,
                description:Description,
            })

            //save course  to mongo
            await newbooking.save()
            console.log("Booking  Successfull !! Our Employee Contact You Shortly ")
             return res.status(201).json({message:"Booking  Successfull !! Our Employee Contact You Shortly"})
        }else{
        console.log("Invalid Credentail")
         res.status(401).json({ message: "Invalid Credentail" });
        console.log(req.userType)
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error" })
    }
})
//------------------------------------------------------------------------
//user profile 
userRoute.patch('/userinfo',authenticate,async(req,res)=>{    
    try{
        if(req.userType=='user'){      
            console.log("User login success") 
            
        const {Name,UserName,Email,Phn,Address}=req.body                     

        const existingUser= await User.findOne({userName : UserName})                        
        if(!existingUser){
            console.log("User not found!!")
            return res.status(400).json({message:"User not found!!"})
         }else{
            existingUser.name = Name;
            existingUser.userName =UserName;
            existingUser.email = Email;
            existingUser.phoneNumber = Phn;

            existingUser.address = {
                address: Address.address,
                city: Address.City,
                state: Address.State,
                pincode: Address.Pincode,
                country: Address.Country
            }
            
            await existingUser.save()
            console.log("User details Addedd Successfully!!")
             return res.status(201).json({message:"User Details Addedd Successfully!!"})         }                                
            
        } else{
        console.log("Invalid Credentail")
        return res.status(403).json({ message: "Invalid Credentail" });
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error" })
    }
})
//-----------------------------------------------------------------------------
//education
userRoute.patch('/useredu',authenticate,async(req,res)=>{    
    try{
        if(req.userType=='user'){      
            console.log("User login success")  
            
            const {Education}=req.body 
         
         const existingUser = await User.findOne( {userName:req.UserName} );
        if(!existingUser){
            console.log("User not found!!")
            return res.status(400).json({message:"User not found!!"})
         }else{
            existingUser.education = {
                degree: Education.Degree,
                fieldOfStudy: Education.FieldStudy,
                university: Education.University,
                graduationYear: Education.GraduationYear,
            }
        }
        await existingUser.save()
        res.status(200).json({message: "User details Addedd Successfully!!" })
        }else{
            console.log("Invalid Credentail")
        }       
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error" })
    }
})
//---------------------------------------------------------------------------
//qualification
userRoute.patch('/userqualification',authenticate,async(req,res)=>{    
    try{
        if(req.userType=='user'){      
            console.log("User login success")   

            const {Qualification}=req.body
         
            const existingUser=await User.findOne({userName:req.UserName})
           if(!existingUser){
               console.log("User not found!!")
               return res.status(400).json({message:"User not found!!"})
            } else{
                existingUser.qualifications = {
                 certification: Qualification.Certification,
                 skills: Qualification.Skills,
                language: Qualification.Language,
                other: Qualification.Other,
                }
                await existingUser.save()
               console.log("User details Addedd Successfully!!")
                return res.status(201).json({message:"User Details Addedd Successfully!!"})
            }                                    
        }else{
            console.log("User login failed!!")
        }     
        
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error" })
    }
})
//------------------------------------------------------------------
userRoute.post('/contactus',authenticate,async(req,res)=>{  
    try{

         const {Name,Email,Message}=req.body                     

        const existingbook= await Contactus.findOne({name : Name})                        
        if(existingbook){
            console.log("Response has been recorded!!")
            return res.status(400).json({message:"  Response has been recorded!!"})
         }                      
            //creating new course
            const newcontact=new Contactus({
                name:Name,
                email:Email,
                message:Message,               
            })

            //save course  to mongo
            await newcontact.save()
            console.log("Response recorded successfully  ")
             return res.status(201).json({message:"Response recorded successfully"})
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: "Internal Server Error" })
    }
})
//----------------

export default userRoute