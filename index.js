let express = require('express');
const mongoose = require('mongoose');
let app =express();
let port = 3000;

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main(){
    await mongoose.connect("mongodb+srv://pratappaladitya:pratappaladitya@cluster0.ixx2k.mongodb.net/courseraWebmet");
    app.listen(port);
    console.log(`Server is running on port ${port}`);
}

main();