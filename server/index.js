const express = require("express");
const app = express();

const PORT = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/api", (req, res) => {
  res.json({
    message: "Hello World from backend!",
  });
});

app.listen(PORT, () => {
  console.log("Example app listening on port 3001!");
});
