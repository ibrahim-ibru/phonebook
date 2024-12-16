import express from "express"
import mongoose from "mongoose"
import env from "dotenv"
import connection from "./connection.js"
import router from "./router.js"
import phoneSchema from "./model/phonebook.model.js"
const app=express()
env.config()

app.use(express.json())
app.use(express.static("../Clientside"))
app.use("/api",router)




connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server Created");
    })
})
.catch((error)=>{console.log(error);})