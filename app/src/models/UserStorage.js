"use strict";

const fs = require("fs").promises;



class UserStorage {
  // # -> 은닉화, private 을 나타냄
  // 은닉화 하면 에러 발생해서 # 빼고 함수명 변경 함 getUserInfo -> getUserInfos
  static getUserInfos(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => {id, password, name}
    const userInfo = usersKeys.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});

    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.getUserInfos(data, id);
      })
      .catch(console.error);
  }


  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    // console.log(users);
    return { success: true };
  }

}

module.exports = UserStorage;