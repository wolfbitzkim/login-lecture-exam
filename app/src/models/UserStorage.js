"use strict";

class UserStorage {
  // # 은닉화 외부 참조 불가
  static #users = {
    id: ["kim", "lee", "park"],
    psword: ["1234", "1234", "12345"],
    name: ["T1", "T2", "T3"]
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

}

module.exports = UserStorage;