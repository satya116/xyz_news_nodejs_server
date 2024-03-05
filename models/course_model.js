const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define quiz schema
const Course = new Schema({
    course_name: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    details: {
        type: String,
        required: false,
    },
    tags: [
        {
            type: Map,
            of: String,
        }
    ],
    duration: {
        type: Number,
        required: false
    },
    number_of_videos: {
        type: Number,
        required: false
    },

    videos: [
        {
            type: Map,
            required: false
        }
    ],
    // createdBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create model
const CourseModel = mongoose.model('Course', Course);

// Export model
module.exports = CourseModel;
