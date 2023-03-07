const { Schema, model } = require('mongoose');

const reviewsSchema = new Schema(
    {
      createdAt: {
        type: Date,
        default: Date.now,
      },
      // meta: {
      //   upvotes: Number,
      //   bookmarks: Number,
      // },
      text: {
        type: String,
        minLength: 10,
        maxLength: 500,
      },
      rating: {
          type: Number,
          required: true
      },
    }
  );

const reactionSchema = new Schema(
    {
        reactionId : {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        fullName: {
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

const postSchema = new Schema ({
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
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
});

const userSchema = new Schema(
    {
        isParent: {
            type: Boolean,
            required: true
        },
        fullName: {
        type: String,
        required: true,
        trim: true
        },
        email: {
          type: String,
          required: true,
          trim: true
        },
        experience: {
            type: String,
            required: true,
        },
        certifications: [String],
        posts: [postSchema],
        reviews: [reviewsSchema]
    },
    {
      toJSON: {
          virtuals: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property 'childCount' that gets the number of children tied to each parent
//   usersSchema
//     .virtual('childCount')
//     // Getter
//     .get(function () {
//       return this.children.length
//     });
  
  const Users = model('Users', userSchema);
  
  module.exports = Users;
  