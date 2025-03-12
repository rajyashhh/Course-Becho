require("dotenv").config();
const express = require ("express");
const app = express();
const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")

app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/admin', adminRouter);

const port = process.env.port;
app.listen(port, console.log(`Server is starting on local host with port number ${port}`))