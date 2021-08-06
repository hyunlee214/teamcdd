"use strict";

const id = document.querySelector('#id'),
  psword = document.querySelector('#psword'),
  loginBtn = document.querySelector('#button');

  loginBtn.addEventListener('click',login);

  function login() {
    if (!id.value)
    return alert('아이디는 입력하셔야죠!!!');
    if (!psword.value)
    return alert('비밀번호는 입력하셔야죠!!!');

    const req = {
      id : id.value,
      psword: psword.value,
    };

    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
          if (res.success) {
            location.href = "/";
          } else {
            alert(res.msg);
          }
      })
      .catch((err) => {
        console.error('로그인중에러발생!!!');
      });
    }