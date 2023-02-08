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


//curl -X POST -d "{'nome':'Helio Franca', 'idade': 33, 'uf': 'SP'}" http://localhost:3000/clientes
async function insertCustomer(customer) {
    const db = await connect();
    return db.collection("customers").insertOne(customer);
}

//curl -X PUT -d "{'nome':'Postman', 'idade': 20, 'uf': 'SP'}" http://localhost:3000/clientes/59ac8350e07d4f10cf6a74f6
// ALtera apenas o que foi enviado no objeto!
async function updateCustomer(id, customer, callback) {
    const db = await connect();
    return db.collection('customers').updateOne({ _id: new ObjectId(id) }, { $set: customer }, callback)
}

async function deleteCustomer(id, callback) {
    const db = await connect();
    db.collection('customers').deleteOne({ _id: new ObjectId(id) }, callback)
}



module.exports = { findCustomers, insertCustomer, findCustomer, updateCustomer,  deleteCustomer }
