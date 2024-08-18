import express from "express";

const allStudents = (req,res) => {
    console.log(req.method);
    res.send("<h3>All Students</h3>");
};

const createStudent = (req,res) => {
    console.log(req.method);
    res.send("<h3>Create student</h3>");
};

const updateStudent = (req,res) => {
    console.log(req.method);
    res.send("<h3>Update student</h3>");
};

const deleteStudent = (req,res) => {
    console.log(req.method);
    res.send("<h3>Delete student</h3>");
};


export { allStudents, createStudent, updateStudent, deleteStudent };