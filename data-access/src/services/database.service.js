// External Dependencies
const mongoDB = require("mongodb");

// Module Variables
const dbConnString = process.env.DB_CONN_STRING;
const dbName = process.env.DB_NAME;
const employeesCollectionName = process.env.EMPLOYEES_COLLECTION_NAME;
const requestsCollectionName = process.env.REQUESTS_COLLECTION_NAME;

const client = new mongoDB.MongoClient(dbConnString);
/** @type {{employees: mongoDB.Collection, requests: mongoDB.Collection}} */
const collections = {};

// Initialize Connection
async function connectToDatabase() {
  await client.connect();
  const db = client.db(dbName);
  const employeesCollection = db.collection(employeesCollectionName);
  const requestsCollection = db.collection(requestsCollectionName);
  collections.employees = employeesCollection;
  collections.requests = requestsCollection;
}
module.exports = { client, collections, connectToDatabase };
