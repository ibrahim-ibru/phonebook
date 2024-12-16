import express from "express"
import mongoose from "mongoose"
import phoneSchema from "./model/phonebook.model.js"
const app=express()
const PORT=3000

app.use(express.json())
app.use(express.static("../Clientside"))

app.post("/add",async(req,res)=>{
    const {name,phone}=req.body
    console.log(name,phone);
    
    await phoneSchema.create({name,phone})
    .then(()=>{
        res.status(201).send({msg:"successfully Added"})
    })
    .catch((error)=>{
        res.status(400).send(error)
    })
    
})

app.get("/getdata",async(req,res)=>{
    try {
        const data= await phoneSchema.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
        
    }
})

app.put("/update/:_id",async (req,res)=>{
    const {_id}=req.params
    const {name,phone}=req.body

    await phoneSchema.updateOne({_id},{$set:{name,phone}})
    .then(()=>{
        res.status(201).send({msg:"Task updated Successfully"})
    })
    .catch((error)=>{
        res.status(400).send(error)
    })
})

app.delete("/delete/:_id",async(req,res)=>{
    const {_id}=req.params
    await phoneSchema.deleteOne({_id})
    .then(()=>{
        res.status(200).send({msg:"successfully deleted"})
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
})


mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log("database Connected successfully");
    app.listen(3000,()=>{
        console.log("server Created");
    })
})
.catch((error)=>{console.log(error);})