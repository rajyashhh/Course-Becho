const {Router}= require("express");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const {adminModel} = require("../db");
const {z} = require("zod");
const { ObjectId } = require("mongodb");
const e = require("express");


adminRouter.post('/create',(req,res)=>{
    res.send({

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

adminRouter.post('login', (req,res)=>{
    res.send({

    })
})
adminRouter.put('update', (req,res)=>{
    res.send({

    })
})
adminRouter.get('coursebulk', (req,res)=>{
    res.send({

    })
})
module.exports = {
    adminRouter : adminRouter
}