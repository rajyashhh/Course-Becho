const {Router}= require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const {adminModel, courseModel} = require("../db");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const jwt_pass = process.env.JWT_SECRET_KEY_ADMIN;
const {authadmin} = require("../middleware/admin");

adminRouter.post('/create', authadmin, async(req,res)=>{
    const adminId = req.userId;
    const {title, description, imageUrl, price} = req.body;

    const course = await courseModel.create({
        title : title,
        description : description,
        price : price,
        image_url : imageUrl,
        creator_id : adminId
    })
    res.json({
        message : "Course Successfully Created",
        courseID : course._id
    })
    
})
adminRouter.post('/signup', async (req,res)=>{
    
    const requiredBody = z.object({
        email : z.string().min(5).max(100).email(),
        password : z.string().min(3,"Password must contain atleast 5 characters").max(20),
        firstName : z.string().min(3).max(30),
        lastName : z.string().min(3).max(30)
    })

    const parsedDatawithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDatawithSuccess.success){
        res.json({
            message : "Incorrect format",
            error : parsedDatawithSuccess.error
        })
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;


    const existingUser = await adminModel.findOne({ email: email });
    if (existingUser) {
        return res.json({
            message: "You are already signed up!"
        });
    }
    let errorThrown =false;
    try{
         await adminModel.create({
            email : email,
            password : hashedPassword,
            firstName : firstName,
            lastName : lastName
        })
        res.json({
            message : "You have successfully signed up!"
        })
    }
    catch(e){
        errorThrown = true;
        console.log(e)
    }
    if (errorThrown){
        res.json({
            message : "Error in creating admin model!",
        })
    }
})

adminRouter.post('/login', async (req,res)=>{
    const email = req.body.email;
    
    const admin = await adminModel.findOne({email : email});
    if(!admin){
        
        res.json({
            message : "No admins found with this email id!"
        })
        return;
    }
    const password = req.body.password;
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(passwordMatch){
            const token = await jwt.sign({id : admin._id},jwt_pass);
            res.json({
                message : "You are successfully signed in!",
                token : token
            })
        }else{
            res.json({
                message : "Password does not match!"
            })
            
        }
    
})
adminRouter.put('/update', (req,res)=>{
    res.send({

    })
})
adminRouter.get('/coursebulk', (req,res)=>{
    res.send({

    })
})
module.exports = {
    adminRouter : adminRouter
}