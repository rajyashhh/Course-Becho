const express = require ("express");
const Router = express.Router;


//const {Router} = require("express"); Another method of writing last two lines

const userRouter = Router();

userRouter.post('/signup', ()=>{

})

userRouter.post('/login', (req,res)=>{
    res.send({

    })
})
userRouter.get('/purchases', (req,res)=>{
    res.send({

    })
})

module.exports= {
    userRouter : userRouter
}