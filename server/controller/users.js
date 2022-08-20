import { v4 as uuid } from "uuid";
import db from "../db/db.js"


export const getUsers = (req, res) => {

    let sql = `SELECT * FROM test_user`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
}

export const createUser = (req, res) => { 
    let sql = `INSERT INTO test_user(id, name, email, number) VALUES("${uuid()}", "${req.body.name}", "${req.body.email}", "${req.body.contact}")`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${req.method} ${req.path} ${req.ip} added an entry to record`);
        res.json(result);
    })
}

export const getUser = (req, res) => {
    let sql = `SELECT * FROM test_user WHERE id = '${req.body.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
}


export const deleteUser = (req, res) => {
    let sql = `DELETE FROM test_user WHERE id = '${req.body.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
}

export const updateUser = (req, res) => {
    let sql = `UPDATE test_user SET name = "${req.body.name}",email = "${req.body.email}",number = "${req.body.contact}" WHERE id = '${req.body.id}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${req.method} ${req.path} ${req.ip} --> ${req.body.id} User Updated succesfully`);
        res.json(result);
    })
    
    res.send("User Updated succesfully")
}