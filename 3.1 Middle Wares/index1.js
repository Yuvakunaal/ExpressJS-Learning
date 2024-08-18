import express from "express";

const app = express();
const port = 3000;

function userCredentials(req,res,next){
    console.log("username : kunaal");
    console.log("phno : 8897160549");
    console.log("email : bhavikunaal@gmail.com");
    next();
}

app.get("/",userCredentials,(req,res) => {
    res.send("<h2>Exploring middle ware concept...</h2>");
});

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
});