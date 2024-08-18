// To create our own malware (i.e.., custom malware)

import express from "express";

const app = express();
const port = 3000;

// app.use((req,res,next) => {
//     console.log(`Request method = ${req.method}`);
//     next();
// });

// or

function logger(req,res,next) {
    console.log(`Request method : ${req.method}`);
    console.log(`url : ${req.url}`);
    next(); // system or postman or webpage will be hanged if we didn't keep this.
}

app.use(logger);

app.get("/",(req,res) => {
    res.send("<h2>Welcome to custom mallware</h2>");
});

app.listen(port,() => {
    console.log(`Running at port ${port}`);
});