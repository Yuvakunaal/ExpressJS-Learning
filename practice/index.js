import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.sendFile(__dirName + "/public/index.html");
})

// app.get("/prod/:a",(req,res) => {
//     const {a} = req.params;
//     const prod = a*2;
//     res.send(`Product of ${a} and 2 = ${prod}`);
// })

// or

app.param("id",(req,res,next,id) => {
    console.log(`ID : ${id}`);
    next();
})

app.get("/user/:id",(req,res) => {
    console.log("This is user id path");
    res.send("Response Ok");
})

app.listen(port,() => {
    console.log(`Running on port = ${port}`);
})