const {Router} = require("express");
const { courseModel, purchaseModel, userModel } = require("../db");
const {authUser} = require("../middleware/user")
const courseRouter = Router();

courseRouter.get('/preview', async (req,res)=>{
    const course = await courseModel.find({})
    console.log(course);
    res.send({
        course
    })
})
courseRouter.get('/purchase', authUser, async(req,res)=>{
    const courseId = req.body.courseId;
    const user = await userModel.findOne({
        _id : req.userId
    })
    const purchase = await purchaseModel.create({
        userId : req.userId,
        courseId : req.body.courseId
    })
    res.send({
        message : `You have successfully bought this course!`
    })
})

module.exports = {
    courseRouter : courseRouter
}
