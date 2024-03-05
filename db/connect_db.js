const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL);
        console.log("Let's go! mongodb connection established");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;