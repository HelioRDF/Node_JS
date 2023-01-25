const { MongoClient, ObjectId } = require("mongodb");

async function connect() {
    if (global.db) return global.db;
    const client = new MongoClient("mongodb://127.0.0.1:27017/");
    await client.connect();
    global.db = client.db("workshop");
    return global.db;
}
async function findCustomers() {
    const db = await connect();
    return db.collection("customers").find().toArray();
}
async function findCustomer(id) {
    const db = await connect(); const objId = new ObjectId(id);
    return db.collection("customers").findOne(objId);
}

async function insertCustomer(customer) {
    console.log(customer)
    const db = await connect();
    return db.collection("customers").insertOne(customer);
}

module.exports = { findCustomers, findCustomer, insertCustomer }

