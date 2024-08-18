import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";           // setted middle ware
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({ extended : true }));      // usage of middle ware

function bandNameGenerator(req,res,next) {            // custom middle ware for generating band name
    console.log(req.body);
    bandName = req.body["name"] +" - "+ req.body["roll"];
    next();
}
app.use(bandNameGenerator);     // usage of custom middle ware

app.get("/",(req,res) => {
    res.sendFile(__dirName + "/public/index.html");
})


app.post("/submit",(req,res) => {
    res.send(`<h2>Your band name is </h2><p>${bandName}</p>`);
})

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
})