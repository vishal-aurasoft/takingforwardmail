import express  from "express";
const app=express();
app.use(express.json())
import mail from "./routes/mailer.js"
app.use((err,req,res,next)=>{
    console.log(err);
    err.statuscode=err.statuscode||500;
    err.status=err.status||"false"
    res.status(err.statuscode).json({msg:"Something went wrong",Status:err.status})
})

app.use("/mailer",mail);

app.listen(5000,()=>{console.log("server started on port 5000")})
