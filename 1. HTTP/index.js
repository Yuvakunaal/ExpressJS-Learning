import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("<h2>Welcome</h2>");
});

app.get("/about",(req,res) => {
    res.send("<h2>This is About route...</h2>");
});

app.get("/faq",(req,res) => {
    res.send("<h2>This is faq route...</h2>");
});

app.get("/contact",(req,res) => {
    res.send("<h2>This is contact route...</h2>");
});

app.listen(port,() => {
    console.log(`Server Running on port ${port}...`);
});