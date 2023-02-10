"use strict"

const app = require("../app")
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
