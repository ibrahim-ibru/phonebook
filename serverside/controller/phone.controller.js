import phoneSchema from "../model/phonebook.model.js"

export async function addPhone(req,res){
    const {name,phone}=req.body
    console.log(name,phone);
    
    await phoneSchema.create({name,phone})
    .then(()=>{
        res.status(201).send({msg:"successfully Added"})
    })
    .catch((error)=>{
        res.status(400).send(error)
    })
}

export async function getData(req,res){
    try {
        const data= await phoneSchema.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
        
    }
}

export async function deleteData(req,res){
    const {_id}=req.params
    await phoneSchema.deleteOne({_id})
    .then(()=>{
        res.status(200).send({msg:"successfully deleted"})
    })
    .catch((error)=>{
        res.status(500).send(error)
    })
}

export async function updateData(req,res){
    const {_id}=req.params
    const {name,phone}=req.body

    await phoneSchema.updateOne({_id},{$set:{name,phone}})
    .then(()=>{
        res.status(201).send({msg:"Task updated Successfully"})
    })
    .catch((error)=>{
        res.status(400).send(error)
    })
}

