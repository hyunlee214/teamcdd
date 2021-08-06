"use strict";

const logger = require('../../config/logger');
const User = require('../../models/User');

const output = {
  home : (req, res) => {
    logger.info(`GET/200 "홈 화면으로 이동"`);
    res.render('home/index');
  },
  login: (req, res) => {
    logger.info(`GET/login 200 "로그인 화면으로 이동"`);
    res.render('home/login');
  },
  register: (req, res) => {
    logger.info(`GET/register 200 "회원가입 화면으로 이동"`);
    res.render('home/register');
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);

    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: "",
    };
    
    const id = {

    }

    log(response, url, id);
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: "POST",
      path: "/register",
      status: "",
    };

    log(response, url, id);
    return res.json(response);

    log(response); 
    return res.json(response);
  },   
};

module.exports = {
  output,
  process
};

const log = (response, url, id) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`
     ); 
  } else {
      logger.info (
        `${url.method} ${url.path} ${url.status} Response: "누가출석했죠?:${response.id},  ${response.success},  ${response.msg}"`
      );
    }
  }