// External dependencies
const bodyParser = require("body-parser");
const express = require("express");
const { ObjectId, Collection } = require("mongodb");

const { collections } = require("../services/database.service");

// Module Variables
const requestsRouter = express.Router();
requestsRouter.use(bodyParser.urlencoded({ extended: true }), express.json());

// Helper methods
const isMongoDbCollection = (arg) => arg instanceof Collection;

// GET
requestsRouter.get("/", async (_req, res) => {
  try {
    if (isMongoDbCollection(collections.requests)) {
      const requests = await collections.requests.find({}).toArray();
      res.status(200).send(JSON.stringify({ requests }));
    } else {
      res.status(200).send("collections.requests is not a MongoDbCollection");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send(error.message);
    } else {
      const em = `Something failed and the error was not of type Error: ${error}`;
      console.error(em);
      res.status(500).send(em);
    }
  }
});

requestsRouter.get("/:id", async (req, res) => {
  const id = req?.params?.id;
  try {
    const query = { _id: new ObjectId(id) };
    console.dir(req, res, query);
  } catch (error) {
    console.error(error);
  }
});

// POST
requestsRouter.post("/", async (req, res) => {
  console.dir(req, res);
});

// PUT
requestsRouter.put("/:id", async (req, res) => {
  console.dir(req, res);
});

// DELETE
requestsRouter.delete("/:id", async (req, res) => {
  console.dir(req, res);
});

module.exports = { requestsRouter };
