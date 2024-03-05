const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining your schema
const blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    somethingCrazy: {
        type: Map,
        of: Map,
    }
});

// Creating a model
const BlogModel = mongoose.model('Blog', blogSchema);

const newBlogCreated = new BlogModel({
    somethingCrazy: {
        "lol": {
            "lol": "lol1",
            "clear": "clear1"
        },
        "clear": {
            "lol": "lol1",
            "clear": "clear1"
        }
    }
});

newBlogCreated.save()

console.log("BlogModel.BlogModel",  BlogModel.db);

module.exports = BlogModel;

// The permitted SchemaTypes are:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map
// UUID

