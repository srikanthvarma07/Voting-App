const app = require("./app");

app.listen(process.env.PORT || 2000, () => {
  console.log("Started server at port 2000");
});