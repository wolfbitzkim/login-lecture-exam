const fs = require("fs");
// 루트 경로를 찾아주는 모듈
const appRoot = require("app-root-path");


// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, 'access.log'), { flags: 'a' });
// const accessLogStream = fs.createWriteStream(
//   `${__dirname}/log/access.log`, { flags: 'a' });
const accessLogStream = fs.createWriteStream(
  `${appRoot}/log/access.log`, { flags: 'a' });

module.exports = accessLogStream;