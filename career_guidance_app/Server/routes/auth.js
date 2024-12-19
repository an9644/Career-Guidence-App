import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.js';
import Admin from '../models/admin.js'

dotenv.config();
const adminRoute = Router();

const secretkey = process.env.Secretkey

adminRoute.post('/signup', async (req, res) => {
    try {
        //storing individually
        const data = req.body
        const { Name, UserName, Password, userType } = data //mapp method of storing 
        console.log(data)
        const newPassword = await bcrypt.hash(Password, 10) //used for security of password they show the exact password 
        //map start    
        const existingUser = await User.findOne({ userName: UserName }) || await Admin.findOne({ userName: UserName })
        if (existingUser) {
            res.status(400).json({ message: "User already exist!" })
        } else {
            //creating new user
            let newUser;
            if (userType == 'admin') {
                newUser = new Admin({
                    name: Name,
                    userName: UserName,
                    password: newPassword,
                    userType: userType
                })
            } else if (userType == 'user') {
                newUser = new User({
                    name: Name,
                    userName: UserName,
                    password: newPassword,
                    userType: userType
                })
            } else {
                res.status(400).json({ message: "Invalid userType!" });
                return;
            }
            await newUser.save();
            res.status(201).json({ message: "data Added successfully" })
        }
    }
    catch (error) {
        res.status(500).json(error)
    }

});

//login

adminRoute.post('/login', async (req, res) => {//callbak function
    const { UserName, Password } = req.body;
    console.log(UserName)

    let result = await Admin.findOne({ userName: UserName });
    if (!result) {
        result = await User.findOne({ userName: UserName });
    }
    // cheching if the password is corect 
    if (!result) {
        res.status(404).json({ message: "User does not exist" })
    } else {
        const valid = await bcrypt.compare(Password, result.password)
        console.log(valid)

        if (valid) { // toekns are created by usernameand userType
            const token = jwt.sign({ UserName: result.userName, userType: result.userType }, secretkey, { expiresIn: '1h' }) //function({para1 : athokke venm token genarate chyn,seceretkey kodukkumbol anu eth work aunne}, 1 houe time ulle ath kazhinja veendum login cheyynm)
            res.cookie('authToken', token, { httpOnly: true });                                     // eth store avunnath browser cookie
            console.log(token)
            return res.status(200).json({ token })

        } else {
            res.status(400).json({ meassage: "invalid password" })
        }
    }
})
//-----------------------------------------------------------------------
//logout

adminRoute.get('/logout', authenticate, (req, res) => {
    try {
        if (req.userType) {
            res.clearCookie('authToken');
            res.status(200).json({ message: "Logout successfull" });
        } else {
            res.status(404).json({ message: "No user found!" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" })
    }

});
adminRoute.get('/getuser', async (req, res) => {
    try {
        
        const result = await User.find();
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.status(400).json({ message: 'there is no user ' })
            // console.log("No such course")
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
})


//--------------------------------------------------------------------
 module.exports=adminRoute;