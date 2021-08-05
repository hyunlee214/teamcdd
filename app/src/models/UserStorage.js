"use strict";

const fs = require('fs').promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
      }, {});
      return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }

  static getUserInfo(id) { 
    return fs.readFile('./src/databases/users.json')
     .then((data) => {        // 해당로직이 성공했을 때 실행
        return this.#getUserInfo(data, id);
    })
     .catch(console.error);      // 해당로직이 실패했을 때 실행
  }


  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return {success: true};
  }
}

module.exports = UserStorage;