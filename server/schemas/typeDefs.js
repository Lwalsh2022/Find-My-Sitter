const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    fullName: String
    email: String
    userName: String
    posts: [Post]
    }

    type Post {
      _id: ID
      postTitle: String
      postText: String
      email: String
      userName: String
      hourlyRate: Int
      numberOfChildren: Int
      specialNeeds: String
      user: User
    }
    
    type Query {
      users: [User]
      posts: [Post]
      user(id: ID!): User
      # user(id: ID!): [Post]
      post(id: ID!): Post
    }


  type Mutation {
    addUser(fullName: String!, email: String!, userName: String!): User
    updateUser(id: ID!, postTitle: String, postText: String, email: String, hourlyRate: Int, numberOfChildren: Int, specialNeeds: String): User
    deleteUser(id: ID!): User
    addPost(postTitle: String!, postText: String!, email: String!, hourlyRate: Int!, numberOfChildren: Int!, specialNeeds: String): Post
    updatePost(id: ID!, postTitle: String, postText: String, email: String, hourlyRate: Int, numberOfChildren: Int): Post 
    deletePost(id: ID!): Post
  }
`;

module.exports = typeDefs;
