const{Router} = require('express');
const courseRouter = Router();

courseRouter.post('/purchases',(req,res)=>{
    res.send('my buying courses')
})

courseRouter.get('/preview',(req,res)=>{
    res.send('all the courses')
})

module.exports = {
    courseRouter: courseRouter
}