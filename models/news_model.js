const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    news_id: {
        type: String,
        required: false,
    },
    news_title: {
        type: String,
        required: true,
    },
    news_in_short: {
        type: String,
        required: false,
    },
    news_in_detail: {
        type: String,
        required: false,
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        required: false
    },
    tags: {
        type: Map,
        of: String,
    },
    news_image_url: {
        type: String,
        required: false
    },
    news_video_url: {
        type: String,
        required: false
    },
    news_read_time: {
        type: Number,
        required: false
    },
    is_blocked: {
        type: Boolean,
        required: false,
        default: false,
    },
    is_approved: {
        type: Boolean,
        required: false,
        default: false,
    },
    approved_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    blocked_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    number_of_reports: {
        type: Number,
        default: 0,
        required: false
    },
    news_source: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Source',
        required: false,
    },
    news_source_url: {
        type: String,
        required: false,
    },
});

// Create model
const NewsModel = mongoose.model('News', NewsSchema);

// Export model
module.exports = NewsModel;
