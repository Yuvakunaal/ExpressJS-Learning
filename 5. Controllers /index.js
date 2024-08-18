import express, { Router } from "express";
import students from "./routes/student.js"

const app = express();
const port = 3000;

app.use("/students",students);

app.listen(port,() => {
    console.log(`Running on port : ${port}`);
});


// After completing all these coding part..check in postman...