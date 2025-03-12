require("dotenv").config();
const express = require ("express");
const app = express();
const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/course")


app.use('/user', userRouter);
app.use('/course', courseRouter);


const port = process.env.port;
app.listen(port, console.log(`Server is starting on local host with port number ${port}`))