const { Schema, model } = require('mongoose');

// Schema to create review model
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
    }
  }
);

// Initialize our Review model
const Reviews = model('Reviews', reviewsSchema);

module.exports = Reviews;