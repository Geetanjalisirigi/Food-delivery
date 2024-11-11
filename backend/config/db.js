import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://geetanjalisirigibattula:Geeta2710$@cluster0.bpp2m.mongodb.net/food-del")
    .then(()=>console.log("DB connection successfull"));
}