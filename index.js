require("dotenv").config();
const express = require ("express");
const app = express();
const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")
const mongoose = require("mongoose");
const port = process.env.port;
app.use(express.json());
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);







async function main(){
    const mongoose_url = process.env.mongo_url;
    await mongoose.connect(mongoose_url);
    app.listen(port, console.log(`Server is starting on local host with port number ${port}`))
}

main();