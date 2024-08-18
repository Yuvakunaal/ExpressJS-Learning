import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let userAut = false;

app.use(bodyParser.urlencoded({ extended:true }));

function passwordcheck(req,res,next){
    const password = req.body["password"];
    if (password === "dogsecret"){
        userAut = true;
    }
    next();
}

app.use(passwordcheck);

app.get("/",(req,res) => {
    res.sendFile(__dirName + "/public/index.html");
})

app.post("/check",(req,res) => {
    if (userAut){
        res.sendFile(__dirName + "/public/secret.html");
    }
    else{
        res.redirect("/");
    }
})

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
})