// import dotenv from "dotenv";
// dotenv.config({ silent: process.env.NODE_ENV === 'production' });

import mysql from 'mysql'
var db = mysql.createConnection({
  host     : "sql6.freesqldatabase.com",
  user     : "sql6513996",
  password : "fteaMrsU6B",
  database : "sql6513996"
});

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + db.threadId);
});

export default db ;