const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);
const express = require("express");

const { indexRouter } = require("./routes/index.router");
const { employeesRouter } = require("./routes/employees.router");
const { requestsRouter } = require("./routes/requests.router");
const { connectToDatabase } = require("./services/database.service");

const app = express();
const port = parseInt(process.env.HTTP_PORT, 10);
const serverAddress = process.env.HTTP_CONN_STRING;

const init = async () => {
  console.log("Initializing API...");
};

init()
  .then(() => connectToDatabase())
  .then(async () => {
    app.use("/employees", employeesRouter);
    app.use("/requests", requestsRouter);
    app.use("/", indexRouter);
    app
      .listen(port, () => {
        console.log(`API server started at ${serverAddress}`);
      })
      .on("error", (err) => {
        console.error(`1 ${err}`);
      });
  })
  .catch((error) => {
    console.error(`Database connection failed: ${error}`);
    process.exit();
  });
