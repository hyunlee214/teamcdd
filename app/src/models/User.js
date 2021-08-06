"use strict";

const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
    const user = await UserStorage.getUserInfo(client.id);
     
    if (user) {
      if (user.id === client.id && user.psword === client.psword) {
        return { success : true };
    }
      return {success: false, msg : "비밀번호가틀립니다!!!"};
  }
    return {success : false, msg : "아이디부터만드세요!!!"};
  } catch(err) {
    return {success: false, err };
  }
}

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch(err) {
       return {success : false, err};
    }
  }  
}


module.exports = User;