const { Schema, model } = require('mongoose');

const postSchema = new Schema (
    {
        postTitle: {
            type: String,
            required: true,
            maxlength: 50
        },
        postText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        email: {
            type: String,
            required: true
        },
        hourlyRate: {
            type: Number,
            required: true
        },
        numberOfChildren: {
            type: Number,
            required: true
        },
        specialNeeds: {
            type: String,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal), 
        },
    }
)

const Post = model ('Posts', postSchema)

module.exports = Post;