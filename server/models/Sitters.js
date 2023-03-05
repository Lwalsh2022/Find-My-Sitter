const { Schema, model } = require('mongoose');

const sittersSchema = new Schema(
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
    experience: {
        type: String,
        required: true,
    },
    certifications: [String],
    reviews: [
        {
            type: Schema.Types.ObjectID,
            ref: "Reviews"
        }
    ]
  }
);

const Sitters = model('Sitters', sittersSchema);

module.exports = Sitters;
