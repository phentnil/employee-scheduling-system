// External Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const { ObjectId, Collection } = require("mongodb");

const { collections } = require("../services/database.service");

// Module Variables
const employeesRouter = express.Router();

employeesRouter.use(bodyParser.urlencoded({ extended: true }), express.json());

// Helper methods
const isEmployee = (
  /** @type {import("mongodb").WithId<import("mongodb").Document>} */ e
) => {
  const eString = JSON.stringify(e);
  const ere =
    /^\{("_id":"[0-9a-f]+",)?"firstName":"[^"]+?","lastName":"[^"]+?","fte":[\d.]+?,"shift":"(Day|Evening|Night)","isManager":(true|false)\}$/;
  return ere.test(eString);
};
const isMongoDbCollection = (e) => e instanceof Collection;

// GET
employeesRouter.get("/", async (_req, res) => {
  try {
    if (isMongoDbCollection(collections.employees)) {
      const employees = await collections.employees.find({}).toArray();
      res.status(200).send(JSON.stringify({ employees }));
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

employeesRouter.get("/:id", async (req, res) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const employee = await collections.employees.findOne(query);
    if (isEmployee(employee)) {
      res.status(200).send(employee);
    } else {
      res
        .status(500)
        .send(
          `Internal Server Error. The database returned a response that did not contain an Employee type`
        );
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// POST
employeesRouter.post("/", async (req, res) => {
  try {
    if (isEmployee(req.body)) {
      const newEmployee = req.body;
      const result = await collections.employees.insertOne(newEmployee);

      if (result) {
        res
          .status(201)
          .send(
            `Successfully created a new employee with id ${result.insertedId}`
          );
      } else {
        res.status(500).send("Failed to create a new employee.");
      }
    } else {
      res
        .status(400)
        .send(
          `Bad Request. The data received did not match the Employee object type`
        );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).send(error.message);
    } else {
      const em = `Something failed and the error was not of type Error: ${error}`;
      console.error(em);
      res.status(400).send(em);
    }
  }
});

// PUT
employeesRouter.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    if (isEmployee(req.body)) {
      const updatedEmployee = req.body;
      const query = { _id: new ObjectId(id) };

      const result = await collections.employees.updateOne(query, {
        $set: updatedEmployee,
      });

      if (result) {
        res.status(200).send(`Successfully updated employee with id ${id}`);
      } else {
        res.status(304).send(`Employee with id: ${id} not updated`);
      }
    } else {
      res
        .status(400)
        .send(
          `Bad Request. The request data did not include the Employee object type.`
        );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).send(error.message);
    } else {
      const em = `Something failed and the error was not of type Error: ${error}`;
      console.error(em);
      res.status(400).send(em);
    }
  }
});

// DELETE
employeesRouter.delete("/:id", async (req, res) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const result = await collections.employees.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed employee with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove employee with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Employee with id ${id} does not exist`);
    } else {
      res
        .status(200)
        .send(
          `I'm not sure what happened in this DELETE request with ${id}, but everything is OK`
        );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`2 ${JSON.stringify(error.message)}`);
      res.status(400).send(`3 ${JSON.stringify(error.message)}`);
    } else {
      const em = `Something failed and the error was not of type Error: ${error}`;
      console.error(em);
      res.status(400).send(em);
    }
  }
});
module.exports = { employeesRouter };
