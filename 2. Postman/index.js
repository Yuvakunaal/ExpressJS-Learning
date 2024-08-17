import express from 'express';
const app = express();
const port = 3000;

// GET :- Retreives information from the specified resource, and should only be used to request data(not modify it).
// POST :- Sends data to the server for processing, usually resulting in a change in the server state or side effects on the server.
// PUT :- Updates a current resource or creates it if it doesn't exist, with the client providing a complete and upload copy of the resource.
// PATCH :- Updates part of an existance resource, with the client providing only the parts of the resource that need to be updated.
// DELETE :- Removes the specified resource from the server.

app.get("/",(req,res) => {
    res.send("<h2>Welcome</h2>");
});

app.post("/about",(req,res) => {
    res.sendStatus(201);
})

app.put("/user/kunaal",(req,res) => {
    res.sendStatus(202);
})

app.patch("/user/kunaal",(req,res) => {
    res.sendStatus(203);
})

app.delete("/user/kunaal",(req,res) => {
    res.sendStatus(204);
})

app.listen(port,() => {
    console.log(`Server Running on port ${port}...`);
});