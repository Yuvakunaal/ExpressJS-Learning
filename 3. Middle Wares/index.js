import express from 'express';
import bodyParser from 'body-parser';   // body-parser is one of middleware
import { dirname } from "path";
import { fileURLToPath } from 'url';
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => {
    // console.log(__dirName + "/public/index.html");
    res.sendFile(__dirName + "/public/index.html");    // To access html or any other files 
});

app.post("/submit",(req,res) => {
    console.log(req.body);
})

app.listen(port,() => {
    console.log(`Server Running on port ${port}...`);
});
