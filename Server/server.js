const express   = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");


const db = mysql.createConnection({
    "host": 'localhost',
    "user": 'root',
    "password": 'root',
    "database": 'jymspace_db'
});

//connect

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySql connected to jymspace_db")
})

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.json({
        "message" : "Get activated"
    });
});

app.get("/:username",(req,res)=>{
    var username = req.params.username;
    let sql = `SELECT * FROM users WHERE USER_ID = ${username}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`@User_ID ${username} -> ${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
})

app.get("/:username/showalluser",(req,res)=>{
    var username = req.params.username;
    let sql = `SELECT * FROM emp_user, mem_user WHERE emp_user.GYM_ID = ${username} AND mem_user.GYM_ID = ${username}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`@User_ID ${username} -> ${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
})

app.get("/:username/showallmem",(req,res)=>{
    var username = req.params.username;
    let sql = `SELECT * FROM mem_user WHERE mem_user.GYM_ID = ${username}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`@User_ID ${username} -> ${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
})

app.get("/:username/showallemp",(req,res)=>{
    var username = req.params.username;
    let sql = `SELECT * FROM emp_user WHERE emp_user.GYM_ID = ${username}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`@User_ID ${username} -> ${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
})

app.get("/:username/showallduemem",(req,res)=>{
    var username = req.params.username;
    let sql = `SELECT * FROM mem_user WHERE mem_user.GYM_ID = ${username} AND mem_user.DD = TRUE`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`@User_ID ${username} -> ${req.method} ${req.path} ${req.ip}`);
        res.json(result);
    })
})

app.get("/:username/refreshdash",(req,res)=>{
    var username = req.params.username;
    // let sql = `SELECT * FROM emp_user WHERE emp_user.GYM_ID = ${username}`;
    // let query = db.query(sql, (err, result) => {
    //     if(err) throw err;
        console.log(`@User_ID ${username} -> ${req.method} ${req.path} ${req.ip}`);
        res.json(`This loads new data into Dashboards ${username}`);
    })
// })

app.post("/:username/empadd", (req,res) => {
    var data = {
        // "EMP_ID":req.body.,
        "FULLNAME" :req.body.name,
        "GENDER" :req.body.gender,
    "MOBILE" :req.body.mobile,
    "DOB"  :req.body.dob,
    "DOJ" :req.body.doj,
    "GYM_ID" :username,
    // "GYMNAME" :req.body.name,
    "EMAIL" :req.body.email,
    "USERNAME" :req.body.username,
    "PASS" :req.body.pass,
    "ADDRESS" :req.body.address,
    "CITY" :req.body.city, 
 "STATE" :req.body.sate,
 "COUNTRY" :req.body.name,
   "PINCODE" :req.body.pincode,
   "SALARY" :req.body.salary,
   "STAT": req.body.status
}
res.json(data)
})

app.post("/:username/memadd", (req,res) => {
    var data = {
        // "MEM_ID":req.body.,
        "FULLNAME" :req.body.name,
        "GENDER" :req.body.gender,
    "MOBILE" :req.body.mobile,
    "DOB"  :req.body.dob,
    "DOJ" :req.body.doj,
    "DD" :req.body.dd,
    "GYM_ID" :username,
    // "GYMNAME" :req.body.name,
    "EMAIL" :req.body.email,
    "USERNAME" :req.body.username,
    "PASS" :req.body.pass,
    "ADDRESS" :req.body.address,
    "CITY" :req.body.city, 
 "STATE" :req.body.sate,
 "COUNTRY" :req.body.name,
   "PINCODE" :req.body.pincode,
   "PLAN" :req.body.plan,
   "STAT": req.body.status
}
res.json(data)
})

app.post("/signupb", (req,res) => {
    var data = {
        "gymname":req.body.gymname,
        "email":req.body.email,
        "password":req.body.password
}
res.json(data)
})

app.post("/signinb", (req,res) => {
    var data = {
        "email":req.body.email,
        "password":req.body.password
}
res.json(data)
})

app.post("/register", (req,res) => {
    var data = {
        "firstname":req.body.fname,
        "lastname":req.body.lname,
        "gymname":req.body.gymname,
        "email":req.body.email,
        "address":req.body.address,
        "city":req.body.city,
        "state":req.body.state,
        "pincode":req.body.pincode
}
res.json(data)
})

app.post("/:username/confirmpayment", (req,res) => {
    var data = {
        "amount":req.body.amount,
        "email":req.body.email,
        "phone":req.body.phone,
        "name":req.params.username,    
}
res.json(data)
})

app.post("/subcontact", (req,res) => {
    var data = {
        "name":req.body.name,
        "email":req.body.email,
        "text":req.body.text,    
}
res.json(data)
})


app.listen(3000, ()=> console.log("Connection established successfully"));