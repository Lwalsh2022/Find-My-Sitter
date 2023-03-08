const { User, Post } = require('../models');


const resolvers = {
 
  Query: {
    users: async () => {
      return await User.find({}).populate('posts');
    },
    user: async(parent, args) => {
      return await User.findById(args.id);
    },
    posts: async () => {
      return await Post.find({});
    },
    post: async(parent,args) => {
      return await Post.findbyId(args.id)
    }
  },

  Mutation: {
    addUser: async (parent, { fullName, email, userName }) => {
      return await User.create({ fullName, email, userName });
    },

    updateUser: async (parent, { id, fullName, email, userName }) => {
      return await User.findOneAndUpdate(
        { _id: id },
        { fullName },
        { email },
        { userName },
        { new: true }
      );
    },

    deleteUser: async(parent, { id }) => {
      return await User.findOneAndDelete({ id });
    },

    addPost: async (parent, { postTitle, postText, email, hourlyRate, numberOfChildren, specialNeeds }) => {
      return await Post.create({ postTitle, postText, email, hourlyRate, numberOfChildren, specialNeeds});
    },

    updatePost: async (parent, { id, postTitle, postText, email, hourlyRate, numberOfChildren, specialNeeds}) => {
      return await Post.findOneAndUpdate(
        { _id: id },
        { postTitle},
        { postText },
        { email },
        { hourlyRate },
        { numberOfChildren },
        { specialNeeds },
        { new: true }
      );
    },

    deletePost: async (parent, { id }) => {
      return await Post.findOneAndDelete({ id });
    }

  }

};

module.exports = resolvers;
