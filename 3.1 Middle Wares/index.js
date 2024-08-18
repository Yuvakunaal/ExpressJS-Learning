import express from "express";
import userCredentials from "./middlewares/logs.js";

const app = express();
const port = 3000; 

app.get("/",userCredentials,(req,res) => {
    res.send("<h2>Exploring middle ware concept...</h2>");
});

app.get("/about",(req,res) => {
    res.send("<h3>About...</h3>");
});

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
});

// Here userCredentials will used when "/" is runned, but not for '/about'

// we can do it in a seperate folder for all middlewares and import 
// or
// we can do it in a single file like 'index1.js'