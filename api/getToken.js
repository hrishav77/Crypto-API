const express= require('express')
const router=express.Router()
require('dotenv').config()
const jwt=require('jsonwebtoken')


router.post("/",(req,res)=>{
    const username=req.body.username
    const user={ name:username }

    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
    res.json({username:username,accessToken:accessToken})
})

module.exports=router