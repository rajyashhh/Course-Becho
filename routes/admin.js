const {Router}= require("express");
const adminRouter = Router();

adminRouter.post('/create',(req,res)=>{
    res.send({

    })
})
adminRouter.post('/signup', (req,res)=>{
    res.send({

    })
})

adminRouter.post('/login', (req,res)=>{
    res.send({

    })
})
adminRouter.put('/update', (req,res)=>{
    res.send({

    })
})
adminRouter.get('/course/bulk', (req,res)=>{
    res.send({

    })
})
module.exports = {
    adminRouter : adminRouter
}