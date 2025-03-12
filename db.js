const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongoose_url = process.env.mongo_url;
mongoose.connect(mongoose_url);
const userSchema = new Schema({
    id : ObjectId,
    email : {type: String, unique :true},
    password : String,
    firstName : String,
    lastName : String
})

const adminSchema = new Schema({
    id : ObjectId,
    email : String,
    password : String,
    firstName : String,
    lastName : String
})

const courseSchema = new Schema({
    id : ObjectId,
    title : String,
    description : String,
    price : Number,
    image_url : String,
    creator_id : ObjectId
})

const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId
})

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admins", adminSchema);
const courseModel = mongoose.model("courses", courseSchema);
const purchaseModel = mongoose.model("purchases", purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}