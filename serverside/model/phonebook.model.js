import mongoose from "mongoose";

const phoneSchema=new mongoose.Schema({
    name:{type:String},
    phone:{type:Number}
})

export default mongoose.Phone||mongoose.model("Phone",phoneSchema)
