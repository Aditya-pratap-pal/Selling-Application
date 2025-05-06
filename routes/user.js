// const express = require('express');
// const router = express.Router();
const{ Router } = require('express');
const userRouter = Router();

userRouter.post('/signup',(req,res)=>{
    res.send('this is signup')
})

userRouter.post('/login',(req,res)=>{
    res.send('this is login')
}) 

userRouter.get('/purchases',(req,res)=>{
    res.send('my purchases')
})

module.exports = {
    userRouter: userRouter
}