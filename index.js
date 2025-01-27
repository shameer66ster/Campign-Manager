const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listning to port ${port}`);
});
