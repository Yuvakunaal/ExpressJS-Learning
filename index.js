import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("<h2>hello</h2>");
});

app.listen(port,() => {
    console.log(`Server Running on port ${port}...`);
});