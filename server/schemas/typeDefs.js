const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Child {
    _id: ID
    age: Int
    specialNeeds: [String]
    }

    type Parent {
    _id: ID
    firstName: String
    lastName: String
    email: String
    children: [Child],
    reviews: [Review]
    }

    type Sitter {
    _id: ID
    firstName: String
    lastName: String
    email: String
    experience: String
    certifications: [String]
    reviews: [Review]
    }
    
    type Review { 
    _id: ID
    createdAt: String
    text: String
    rating: Int,
    sitter: Sitter
    parent: Parent
    }

    
    input ChildInput {
      age: Int
      specialNeeds: [String]
    }
    
    type Query {
      parents: [Parent]
      sitters: [Sitter]
      reviews: [Review]
  
    }


  type Mutation {
    addParent(firstName: String!, lastName: String!, email: String!, children: [ChildInput]!): Parent
    updateParent(_id: ID!, firstName: String!, lastName: String!, email: String!, children: [ChildInput]!): Parent
    deleteParent(_id: ID!): Parent
    attachChildrentoParent(parentId: ID!, children: [ChildInput]!): Parent

    addSitter(firstName: String!, lastName: String!, email: String!, experience: String!, certifications: [String]!): Sitter
    updateSitter(_id: ID!, firstName: String!, lastName: String!, email: String!, experience: String!, certifications: [String]!): Sitter
    deleteSitter(_id: ID!): Sitter
    
    
    addReview(sitterId: ID!, text: String!, rating: Int!,parentId: ID!): Review
    updateReview(_id: ID!, text: String!, rating: Int!): Review
    deleteReview(_id: ID!): Review
  
  }
`;

module.exports = typeDefs;
