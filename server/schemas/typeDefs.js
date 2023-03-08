const { gql } = require('apollo-server-express');



const typeDefs = gql`
    type User {
    _id: ID
    name: String
    email: String
    password: String
    posts: [Post]
    }

    type Auth {
      token: ID!
      user: User
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
    addUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    updateUser(id: ID!, postTitle: String, postText: String, email: String, hourlyRate: Int, numberOfChildren: Int, specialNeeds: String): User
    deleteUser(id: ID!): User
    addPost(postTitle: String!, postText: String!, email: String!, hourlyRate: Int!, numberOfChildren: Int!, specialNeeds: String): Post
    updatePost(id: ID!, postTitle: String, postText: String, email: String, hourlyRate: Int, numberOfChildren: Int): Post 
    deletePost(id: ID!): Post
  }
`;

module.exports = typeDefs;
