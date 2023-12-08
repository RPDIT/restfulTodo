import express from "express";
import asyncHandler from "express-async-handler";
import queries from "./queries.js";
import pool from "./db.js";
const router = express.Router();

router.get("/", asyncHandler(async (req,res) => {
    const results = await pool.query(queries.allTodos)
    res.status(200).json(results.rows);
}));
router.get("/:id", asyncHandler(async (req,res) => {
    const index = parseInt(req.params.id);
    const results = await pool.query(queries.aTodo,[index])
    res.status(200).json(results.rows);
}));

router.post("/creation", asyncHandler(async (req,res) => {
    let name= req.body.name;
    const creation = await pool.query(queries.newTodo, [name, new Date(), false])
    const newest = await pool.query(queries.byName, [name])
    res.status(200).json(newest.rows);
}));

router.delete("/deletion/:id", asyncHandler(async (req, res) => {
    let index = parseInt(req.params.id);
    const results = await pool.query(queries.deleteTodo, [index])
    res.send("The todo at: " + index + " has been deleted.");
}));

router.post("/:id/name", asyncHandler(async (req, res) => {
    let index = parseInt(req.params.id);
    const edited = await pool.query(queries.changeName, [req.body.name, index])
    const results = await pool.query(queries.aTodo, [index]) 
    res.status(200).json(results.rows);
}));
router.get("/:id/status", asyncHandler(async (req, res) => {
    let index = parseInt(req.params.id);
    const statusChange = pool.query(queries.changeStatus, [index])
    const results = pool.query(queries.aTodo, [index])
    res.status(200).json(results.rows);
}));

export default router; 
