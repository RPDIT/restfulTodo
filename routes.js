import express from "express";
import queries from "./queries.js";
import pool from "./db.js";
const router = express.Router();

router.get("/", (req,res) => {
    pool.query(queries.allTodos, (err, results) => {
        if (err) throw err; 
        res.status(200).json(results.rows);
    });
});
router.get("/:id", (req,res) => {
    pool.query(queries.aTodo,[req.params.id], (err, results) => {
        if (err) throw err; 
        res.status(200).json(results.rows);
    });
});

router.post("/creation", (req,res) => {
    let name= req.body.name;
    pool.query(queries.newTodo, [name, new Date(), false],(err, results) => {
        if (err) throw err;
        res.status(200).send("Todo created with name: " + name);
    });
});

router.delete("/deletion/:id", (req, res) => {
    let index = parseInt(req.params.id);
    pool.query(queries.deleteTodo, [index], (err, results) => {
        if (err) throw err;
        res.send("The todo at: " + index + " has been deleted.");
    });
});

router.post("/:id/name", (req, res) => {
    let index = parseInt(req.params.id);
    pool.query(queries.changeName, [req.body.name, index], (err, results) => {
        if (err) throw err;
        pool.query(queries.aTodo, [index], (err, results) => {
            if (err) throw err; 
            res.status(200).json(results.rows);
        });
    });
});
router.get("/:id/status", (req, res) => {
    let index = parseInt(req.params.id);
    pool.query(queries.changeStatus, [index], (err, results) => {
        pool.query(queries.aTodo, [index], (errz, resz) => {
            if (errz) throw errz;
            res.status(200).json(resz.rows);
        }); 
    });
});

export default router; 
