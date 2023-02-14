const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const app = express();
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
const routes = require("./routes");

app.use("/static", express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(routes);
//data base change the name
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/crypto");

app.listen(5001, () => console.log("server is runnig on port 5000...."));
