const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

// const db = mysql.createConnection({
//   host: "database-cipher.cnfzhgje9szw.ap-northeast-2.rds.amazonaws.com",
//   user: "admin",
//   password: "taejin#4475",
//   database: "login_lecture"
// });

db.connect();

module.exports = db;
