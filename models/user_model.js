const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    user_id: {
        type: String,
        required: false,
    },
    user_id: {

    },
    first_name: {

    },
    middle_name: {

    },
    last_name: {

    },
    email_id: {

    },
    phone_number: {

    },
    password: {

    },
    created_at: {

    },
    modified_at: {

    },
    refresh_token: {

    },
    access_token: {

    },
    user_image_url: {

    },
    is_blocked: {

    },
    is_approved: {

    },
    approved_by:{

    },
    blocked_by: {

    },
    number_of_reports: {

    },
    user_name: {
        type: String,
        required: false,
    },
    first_name: {
        type: String,
        required: false,
    },
    middle_name: {
        type: String,
        required: false,
    },
    last_name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        default: false
    },
    phone_number: {
        type: String,
        required: false
    },
    is_prime_member: {
        type: Boolean,
        default: false
    },
    // tags: [
    //     {
    //         type: Map,
    //         of: String,
    //     }
    // ],
    // subscriptions: [
    //     {
    //         type: Map,
    //         of: String,
    //     }
    // ],

    subscriptions: [
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
const UserModel = mongoose.model('User', User);

// Export model
module.exports = UserModel;
