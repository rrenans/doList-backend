import mongoose from 'mongoose';

class Database {
    constructor() {
        this.mongo();
    }
    mongo() {
        this.mongoConnection = mongoose.connect(
            "mongodb://localhost:27017/doList",
            {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true 
            }
        );
    }
}

export default new Database();