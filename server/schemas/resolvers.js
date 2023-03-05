const { Parents, Reviews, Sitters } = require('../models');


const resolvers = {
 
  Query: {
    parents: async () => {
      return Parents.find();
    },
    sitters: async () => {
      return Sitters.find();
    },
    reviews: async () => {
      return Reviews.find().populate('sitter').populate('parent');
    },
  },

  Mutation: {
    addParent: async (parent, args) => {
      return Parents.create(args);
    },
    addSitter: async (parent, args) => {
      return Sitters.create(args);
    },
    addReview: async (_, args) => {
      console.log('new review information', args)
      const parent = await Parents.findOne({_id: args.parentId})
      const sitter = await Sitters.findOne({_id: args.sitterId})
      console.log('parent', parent)
      console.log('sitter', sitter)
      return Reviews.create({...args, parent, sitter});
    },
    updateParent: async (parent, args) => {
      return Parents.findOneAndUpdate(
        { _id: args._id },
        {...args},
        { new: true }
      );
    },
    updateSitter: async (parent, args) => {
      return Sitters.findOneAndUpdate(
        { _id: args._id },
        {...args},
        { new: true }
      );
    },
    updateReview: async (parent, args) => {
      return Reviews.findOneAndUpdate(
        { _id: args._id },
        {...args},
        { new: true }
      );
    },
    deleteParent: async (parent, args) => {
      return Parents.findOneAndDelete({ _id: args._id });
    },
    deleteSitter: async (parent, args) => {
      return Sitters.findOneAndDelete({ _id: args._id });
    },
    deleteReview: async (parent, args) => {
      return Reviews.findOneAndDelete({ _id: args._id });
    },

    attachChildrentoParent: async (parent, args) => {
      return Parents.findOneAndUpdate(
        { _id: args.parentId },
        { $push: { children: args.children } },
        { new: true }
      );
    }

  },
  

};

module.exports = resolvers;
