const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        userName: {
            type: String,
            required: true,
            trim: true  
        },
        posts: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Post'
                }
            ],
            default: []
        }
    }
)

const User = model ('Users', userSchema)

module.exports = User;