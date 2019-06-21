if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const routes = require("./routes");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: "2mb" }));
app.use(cors());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
