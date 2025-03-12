const {Router}= require("express");
const adminRouter = Router();

adminRouter.post('/create',(req,res)=>{
    res.send({

    })
})
userRouter.post('/signup', ()=>{
    res.send({
        
    })
})

userRouter.post('/login', (req,res)=>{
    res.send({

    })
})

module.exports = {
    adminRouter : adminRouter
}