import express,{json} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import adminRoute from './routes/routes.js'
import userRoute from './routes/userroute.js'
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const port = process.env.Port 

app.use(json());
app.use(
    cors({
        origin: "http://localhost:4040",
        credentials:true
    })
)
app.use(cookieParser());
app.use('/', adminRoute)
app.use('/', userRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

mongoose.connect("mongodb://mongodb:27017/Career-Guidance-App");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
