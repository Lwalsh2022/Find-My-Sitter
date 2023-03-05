const { Schema, model } = require('mongoose');

const childSchema = new Schema(
    {
      age: {
        type: Number,
        required: true,
        trim: true
      },
      specialNeeds: {
          type: [String],
          required: true,
          trim: true
        },
    }
  );

const parentsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
      },
    email: {
        type: String,
        required: true,
        trim: true
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Posts"
      }
    ],
    children:[childSchema]
  },
  {
    toJSON: {
        virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property 'childCount' that gets the number of children tied to each parent
parentsSchema
  .virtual('childCount')
  // Getter
  .get(function () {
    return this.children.length
  });

const Parents = model('Parents', parentsSchema);

module.exports = Parents;
