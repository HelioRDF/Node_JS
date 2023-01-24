const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
require('dotenv').config();

const collection = "customer";

mongoClient
    .connect(process.env.URI_DB_ATLAS)
    .then(conn => global.conn = conn.db(process.env.DATA_BASE_ATLAS))
    .catch(err => console.log(err))


function findAll(callback) {
    global.conn.collection(collection).find({}).toArray(callback);
}

function insert(customer, callback) {
    global.conn.collection(collection).insertOne(customer, callback);
}

function findOne(id, callback) {
    global.conn.collection(collection).findOne(new ObjectId(id), callback);
}

function update(id, customer, callback) {
   global.conn.collection(collection).updateOne({ _id: new ObjectId(id) },{$set: customer}, callback);
}

function deleteOne(id, callback){
    global.conn.collection(collection).deleteOne({_id: new ObjectId(id)}, callback);
}
 module.exports = { findAll, insert, findOne, update, deleteOne }


