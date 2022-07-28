require('dotenv').config()
const express= require('express')
const app=express()


const getTokenRouter=require("./api/getToken")
const secureRouter=require("./api/secure")

app.use(express.json())
app.use("/api/getToken",getTokenRouter)
app.use("/api/secure",secureRouter)


app.listen(3000)