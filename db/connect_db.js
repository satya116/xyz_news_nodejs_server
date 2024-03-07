const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.connect(process.env.MONGODB_PRODUCTION_CONNECT_URL);
            console.log("Let's go! mongodb connection to production established");
        } else {
            await mongoose.connect(process.env.MONGODB_DEV_CONNECT_URL);
            console.log("Let's go! mongodb connection to dev established");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;