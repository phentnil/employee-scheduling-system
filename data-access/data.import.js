const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const dotEnvConfig = dotenv.config();
dotenvExpand.expand(dotEnvConfig);
const mongoDB = require("mongodb");
const { collections } = require('./data/mocked');

const dbConnect = process.env.DB_CONN_STRING;
const dbName = process.env.DB_NAME;
const employeesCollectionName = process.env.EMPLOYEES_COLLECTION_NAME;
const requestsCollectionName = process.env.REQUESTS_COLLECTION_NAME;

const client = new mongoDB.MongoClient(dbConnect);
const { employees, requests } = collections;

(async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const employeesCollection = db.collections(employeesCollectionName);
    const employeesResult = await employeesCollection.insertMany(employees);
    console.log(`Successfully inserted ${employeesResult.insertedIds} employee records`)
    const requestsCollection = db.collections(requestsCollectionName);
    const requestsResult = await requestsCollection.insertMany(requests);
    console.log(`Successfully inserted ${requestsResult.insertedIds} request records`)
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
})();
