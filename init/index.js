const mongoose = require('mongoose');
const initdata = require('./data');
const listing = require('../models/listing');
const mongo_uri = "mongodb://localhost:27017/wanderlust";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongo_uri);
}

const initDB = async () => {
    await listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj, owner:"699ec8704003f2a0be6174b0"}));
    await listing.insertMany(initdata.data);
    console.log("Database initialized");
}

initDB();

module.exports = initDB;