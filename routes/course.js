const {Router} = require("express");
const courseRouter = Router();

courseRouter.get('/preview', (req,res)=>{
    res.send({

    })
})
courseRouter.get('/purchase', (req,res)=>{
    res.send({

    })
})

module.exports = {
    courseRouter : courseRouter
}