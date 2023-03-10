"use strict";

// const fs = require("fs").promises
const db = require("../config/db");

class UserStorage {
  // # -> 은닉화, private 을 나타냄
  // 은닉화 하면 에러 발생해서 # 빼고 함수명 변경 함 getUserInfo -> getUserInfos
  // static getUserInfoProc(data, id) {
  //   const users = JSON.parse(data);
  //   const idx = users.id.indexOf(id);
  //   const usersKeys = Object.keys(users); // => {id, password, name}
  //   const userInfo = usersKeys.reduce((newUsers, info) => {
  //     newUsers[info] = users[info][idx];
  //     return newUsers;
  //   }, {});

  //   return userInfo;
  // }

  // static getUsersProc(data, isAll, fields) {
  //   const users = JSON.parse(data);
  //   if (isAll) return users;

  //   const newUsers = fields.reduce((newUsers, fields) => {
  //     if (users.hasOwnProperty(fields)) {
  //       newUsers[fields] = users[fields];
  //     }
  //     return newUsers;
  //   }, {});
  //   return newUsers;
  // }

  // static getUsers(isAll, ...fields) {
  //   return fs
  //     .readFile("./src/databases/users.json")
  //     .then((data) => {
  //       return this.getUsersProc(data, isAll, fields);
  //     })
  //     .catch(console.error);
  // }

  static getUserInfo(id) {
    // return fs
    //   .readFile("./src/databases/users.json")
    //   .then((data) => {
    //     return this.getUserInfoProc(data, id);
    //   })
    //   .catch(console.error);

    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;"
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });


  }

  static async save(userInfo) {
    // const users = await this.getUsers(true);
    // if (users.id.includes(userInfo.id)) {
    //   throw " 이미 존재하는 아이디입니다.";
    // }
    // users.id.push(userInfo.id);
    // users.name.push(userInfo.name);
    // users.psword.push(userInfo.psword);
    // fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    // return { success: true };

    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`); // err 문자열 처리
        resolve({ success: true });
      });
    });
  }

}

module.exports = UserStorage;