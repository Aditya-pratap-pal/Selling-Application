// const {Schema} = require('mongoose');
const mongoose = require('mongoose');
// console.log("db.js file is connected") 
// mongoose.connect("mongodb+srv://pratappaladitya:pratappaladitya@cluster0.ixx2k.mongodb.net/courseraWebmet");

const admin = require('./routes/admin');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
    email: {type: String, unique: true},
    password:String,
    firstName: String,
    lastName: String,
})
const adminSchema = new Schema({
    email: {type: String, unique: true},
    password:String,
    firstName: String,
    lastName: String,
})
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
})
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
})

const userModel = mongoose.model('user',userSchema);
const courseModel = mongoose.model('course',courseSchema);
const adminModel = mongoose.model('admin',adminSchema);
const purchaseModel = mongoose.model('purchase',purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
}