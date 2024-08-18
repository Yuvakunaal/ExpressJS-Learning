import express from "express";
import userCredentials from "./middlewares/logs.js";

const app = express();
const port = 3000; 

app.use(userCredentials);

app.get("/",(req,res) => {
    res.send("<h2>Exploring middle ware concept...</h2>");
});

app.get("/about",(req,res) => {
    res.send("<h2>About...</h2>");
});

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
});

// here userCredentials will be used when all diff urls are runned...