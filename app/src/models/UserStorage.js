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

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;

  }

  static getUsers(isAll, ...fields) {
    return fs.readFile('./src/databases/users.json')
    .then((data) => {        // 해당로직이 성공했을 때 실행
       return this.#getUsers(data, isAll, fields);
   })
    .catch(console.error);      // 해당로직이 실패했을 때 실행
  }

  static getUserInfo(id) { 
    return fs.readFile('./src/databases/users.json')
     .then((data) => {        // 해당로직이 성공했을 때 실행
        return this.#getUserInfo(data, id);
    })
     .catch(console.error);      // 해당로직이 실패했을 때 실행
  }


  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw ('이미 있는 아이디임!!!');
    }
      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.psword.push(userInfo.psword);
    fs.writeFile('./src/databases/users.json', JSON.stringify(users));
    return {success : true};
  }
}

module.exports = UserStorage;