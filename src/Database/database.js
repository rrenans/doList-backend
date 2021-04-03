// import mongoose from 'mongoose'
const mongoose = require('mongoose');

class Database {
    constructor() {
        this.mongo();
    }
    mongo() {
        this.mongoConnection = mongoose.connect(
            "mongodb://localhost:27017/doList", 
            {
              useNewUrlParser: true,
              useFindAndModify: true
            }
        );
    }
}

module.exports = new Database();