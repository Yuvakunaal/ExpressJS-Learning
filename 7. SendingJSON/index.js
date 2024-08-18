import express from "express";
import products from "./products.js";

const app = express();
const port = 3000;

app.get("/products",(req,res) => {
    res.json(products);
});

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
});