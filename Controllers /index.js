import express, { Router } from "express";
const router = express.Router();

router.get("/all",(req,res) => {
    res.send("All students");
})

router.post("/create",(req,res) => {
    const a = req.method;
    res.send(`Method : ${a}\n<h1>Create students</h1>`);
})

export default router;