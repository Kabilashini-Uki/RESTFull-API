import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import  useRoute from "./routes/userRoute.js"

dotenv.config();

const app =express();
const PORT= process.env.PORT;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use("/api/user",useRoute)
mongoose.connect(MONGOURL).then(()=>{
    console.log("The database connected successfully");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log(`Database connection Failed ${error}`)
})