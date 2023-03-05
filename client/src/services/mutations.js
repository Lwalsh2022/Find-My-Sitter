// setup appollo client mutations

import { gql } from "@apollo/client";

// export const Add_PARENT = gql`
// `
// export const UPDATE_PARENT = gql``;
// export const DELETE_PARENT = gql``;
// export const ATTACH_CHILD_TO_PARENT = gql``;

export const GET_SITTERS = gql`
  query Query {
    sitters {
      _id
      firstName
      lastName
      email
      experience
      certifications
      reviews {
        rating
        text
      }
    }
  }
`;

// addSitter
export const ADD_SITTER = gql`
  mutation AddSitter($firstName: String!, $lastName: String!, $email: String!, $experience: String!, $certifications: [String]!) {
    addSitter(firstName: $firstName, lastName: $lastName, email: $email, experience: $experience, certifications: $certifications) {
      _id
      firstName
      lastName
      email
      experience
      certifications
    }
  }
`;
// export const UPDATE_SITTER = gql``;
// export const DELETE_SITTER = gql``;

// export const ADD_REVIEW = gql``;
// export const UPDATE_REVIEW = gql``;
// export const DELETE_REVIEW = gql``
