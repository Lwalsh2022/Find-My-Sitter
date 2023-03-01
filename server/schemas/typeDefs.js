const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Parent {
    _id: ID
    

 
  type Query {
    parents: [Parent]
    sitters: [Sitter]

  }
`;

module.exports = typeDefs;
