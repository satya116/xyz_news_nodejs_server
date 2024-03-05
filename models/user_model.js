const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
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
