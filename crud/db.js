const mongoClient = require("mongodb").MongoClient;
mongoClient
  .connect("mongodb://127.0.0.1:27017/workshop")
  .then((conn) => (global.conn = conn.db("workshop")))
  .catch((err) => console.log(err));

const ObjectId = require("mongodb").ObjectId;
function findOne(id, callback) {
  global.conn.collection("customers").findOne(new ObjectId(id), callback);
}
function findAll(callback) {
  global.conn.collection("customers").find({}).toArray(callback);
}
function insert(customer, callback) {
  global.conn.collection("customers").insert(customer, callback);
}

function update(id, customer, callback) {
  global.conn
    .collection("customers")
    .replaceOne({ _id: new ObjectId(id) }, customer, callback);
}

function deleteOne(id, callback) {
  global.conn
    .collection("customers")
    .deleteOne({ _id: new ObjectId(id) }, callback);
}
module.exports = { findAll, insert, findOne, update, deleteOne };
