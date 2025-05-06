const {Router} = require('express');
const adminRouter = Router();

// const adminMiddleware = require('../middleware/admin');
const{adminModel} = require("../db")
//Below line showcase --> This file is protected by this(adminMiddleware) middleware.
// adminRouter.use(adminMiddleware)

adminRouter.post('/signup',(req,res)=>{
    res.send('this is admin signup')
})

adminRouter.post('/login',(req,res)=>{
    res.send('this is admin login')
})

adminRouter.post('/',(req,res)=>{
    res.send('my admin purchases')
})

adminRouter.put('/',(req,res)=>{
    res.send('all the users')
})

adminRouter.post('/bulk',(req,res)=>{
    res.send('all the users')
})

module.exports = {
    adminRouter: adminRouter
}