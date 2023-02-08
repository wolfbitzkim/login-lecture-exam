"use strict"

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  }
}

const users = {
  id: ["kim", "lee", "park"],
  psword: ["1234", "1234", "12345"]
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    // console.log(req.body);
    console.log(id, psword);

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      console.log(idx, users.psword[idx], psword);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다."
    });
  }
};

module.exports = {
  output,
  process
}