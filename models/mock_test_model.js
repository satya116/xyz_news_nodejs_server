const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define quiz schema
const NewsSchema = new Schema({
    news_title: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    detail_news: {
        type: String,
        required: false,
    },
    tags: [
        {
            type: Map,
            of: String,
        }
    ],
    read_time: {
        type: Number,
        required: false
    },
    news_image_url: {
        type: String,
        required: false
    },
    createdBy: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create model
const NewsModel = mongoose.model('News', NewsSchema);

// Export model
module.exports = NewsModel;
