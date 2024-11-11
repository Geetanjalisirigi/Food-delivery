
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";


//app config
const app=express();
const port = process.env.PORT || 5000;


//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)



app.get("/",(req,res)=>{
    res.send("API Working")

})


app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})
//mongodb+srv://geetanjalisirigibattula:<db_password>@cluster0.bpp2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0