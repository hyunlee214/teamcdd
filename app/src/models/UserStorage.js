"use strict";

class UserStorage {
  static #users = {
    id: ["hyunlee", "dnjscjf", "rbxo", "wnsgur"],
    psword: ["0000", "0000", "0000", "0000"],
    name: ["이현", "김원철", "한규태", "성준혁"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}

module.exports = UserStorage;