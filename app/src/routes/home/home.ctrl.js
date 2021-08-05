"use strict";

const output = {
  home : (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const users = {
  id: ["hyunlee", "dnjscjf", "rbxo", "wnsgur"],
  psword: ["0000", "0000", "0000", "0000"],
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
    psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success : true,
        });
      }
    }

    return res.json({
      success : false,
      msg: "로그인실패!"
    })
  }
}

module.exports = {
  output,
  process
};