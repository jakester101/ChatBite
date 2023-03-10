const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    recipes: [Recipe]!
  }

  type Recipe {
    _id: ID
    name: String
    ingredients: [Ingredient]!
    instructions: String
    rating: String
    time: String
    calories: String
    image: Image!
    createdAt: String
    createdBy: User
  }

  type Ingredient {
    _id: ID
    name: String!
    quantity: String
  }

  type Image {
    url: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    recipes(username: String): [Recipe]
    recipe(recipeId: ID!): Recipe
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeId: ID! instructions: String!): Recipe
    removeRecipe(recipeId: ID!): Recipe
  }
`;

module.exports = typeDefs;