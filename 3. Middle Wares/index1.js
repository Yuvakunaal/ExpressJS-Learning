import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";            // morgan is one of middle ware

// const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// app.use(morgan("combined"));
app.use(morgan("tiny"));

app.get("/",(req,res) => {
    // res.sendFile(__dirName + "/public/index.html");
    res.send("Hello kunaal !!!");
})

app.listen(port, () => {
    console.log("Running at port",port);
})