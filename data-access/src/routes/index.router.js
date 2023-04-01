const bodyParser = require("body-parser");
const express = require("express");

// Module Variables
const indexRouter = express.Router();

indexRouter.use(bodyParser.urlencoded({ extended: true }), express.json());
indexRouter.all("", async (_req, res) => {
  res
    .status(200)
    .send(
      "The index path '/' is not available. Valid routes are '/employees' and '/requests'"
    );
});

module.exports = { indexRouter };
