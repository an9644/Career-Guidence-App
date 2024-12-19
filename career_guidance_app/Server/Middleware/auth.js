//commmon cookie handling method
import jwt from 'jsonwebtoken' //nml jwt upayogichanu token undakkiye token is in the jwt =
import dotenv from 'dotenv';
 
dotenv.config();
const secretkey=process.env.Secretkey

const authenticate=(req,res,next)=>{
       const cookies= req.headers.cookie;
   
    // req.cookies

if(!cookies){
    console.log("No cookies Found!");
    return res.status(401).send("Unauthorized");
    
}    console.log(cookies)
    const cookie=cookies.split(';');
    for(let cooki of cookie){   //2 variabe authtoken name and token they are stored in different arrays 
        const [name,token]=cooki.trim().split('=')
        if(name=='AuthToken'){
            //to verify the token using the inbuilt function in jwt jwt.verify(token stored veriable and secretkey)

            try {
                const verified= jwt.verify(token,secretkey)
            console.log(verified)
            

            req.UserName=verified.UserName;
            req.userType=verified.userType
            } catch (error) {
                console.error("Token verification failed:", error);
                return res.status(401).send("Unauthorized");
                
            }
            // break;
        }
        }
        next();

    }

export{authenticate}