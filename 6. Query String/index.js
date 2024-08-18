import express from "express";

const app = express();
const port = 3000;


// For single query string :-
// app.get("/product",(req,res) => {
//     res.send(`Response ok ${req.query.category}`);
// });
// or
app.get("/product",(req,res) => {
    const {category} = req.query;
    res.send(`Response product : ${category}`);
});
// type with '?,=' like this -> 'http://localhost:3000/product?category=apple' in the url

// For multiple query string :-
app.get("/details",(req,res) => {
    const {category,id} = req.query;
    res.send(`Response category = ${category}, id = ${id}`);
})
// type with '?,=,&' like this -> 'http://localhost:3000/details?category=apple&id=1' in the url


app.listen(port,() => {
    console.log(`Running on port : ${port}`);
});
