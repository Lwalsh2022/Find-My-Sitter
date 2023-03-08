const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');


// const User = require('../models/Users')
// const Auth = require('../../../services/auth.service')

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async(parent, args) => {
      return await User.findById(args.id);
    },
    posts: async () => {
      return await Post.find({});
    },
    post: async(parent,args) => {
      return await Post.findById(args.id)
    }
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      return await User.create({ name, email, password });
    },

    login: async (parent, {email, password}) => {
       const user = await User.findOne({email});

       if (!user) {
        throw new AuthenticationError("No profile with this email found!")
       }

       const correctPw = await user.isCorrectPassword(password);
        
       if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
       }

       const token = signToken(user);
       return { token, user};
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

    addPost: async (parent, { postTitle, postText, email, userName, hourlyRate, numberOfChildren, specialNeeds }) => {
      return await Post.create({ postTitle, postText, email, userName, hourlyRate, numberOfChildren, specialNeeds});
    },

    updatePost: async (parent, { id, postTitle, postText, email, userName, hourlyRate, numberOfChildren, specialNeeds}) => {
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