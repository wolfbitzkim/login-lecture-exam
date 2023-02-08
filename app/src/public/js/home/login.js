"use strict"

// #은 tag의 id를 가져온다는 뜻
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value
  };

  //console.log(req, JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then(console.log); // .then((res) => console.log(res))

}