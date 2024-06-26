const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownerRoute");
const usersRouter = require("./routes/userRoute");
const productsRouter = require("./routes/productRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  let errorMessage = "";
  res.render("index", { error: errorMessage });
});

app.listen(3000, () => console.log("connected to port:3000 successfully"));
