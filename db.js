const mongoose = require('mongoose');
const { DBURL } = process.env;

async function connectDb() {
    return new Promise((resolve, reject) => {
        mongoose.connect(DBURL)
            .then(() => {
                console.log("database is connected!");
                resolve("database is connected!");
            })
            .catch((error) => {
                console.log("database is not connected yet!", error)
                // mongoose.connection.close(); //also emmits disconnected
                reject("database is not connected yet!");
                process.exit(1);
            })
    })
};

module.exports = connectDb;