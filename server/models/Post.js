const { Schema, model, Types } = require('mongoose')

const ReactionSchema = new Schema(
    {
        reactionId : {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        email: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:(createdAtVal) => dateFormat(createdAtVal),
            }
        },
            {
                toJSON: {
                    virtuals: true,
                    getters: true
                },
                id: false
            });

const PostSchema = new Schema ({
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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal), 
    },
    reactions: [ReactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
});

const Post = model('Post', PostSchema);
module.exports = Post;