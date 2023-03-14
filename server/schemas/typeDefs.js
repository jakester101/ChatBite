const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    ingredients: Ingredient
  }

  type Ingredient {
    _id: ID
    name: [String!]
    searcher: String
  }


  type Image {
    url: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    ingredients(username: String): [Ingredient]
    ingredient(ingredientId: ID!): Ingredient
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;


