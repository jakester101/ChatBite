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
    ingredients: String
    instructions: String
    rating: String
    prepTime: String
    calories: String
    image: String
    createdAt: String
    createdBy: String
  }

  type Ingredient {
    _id: ID
    name: String!
    quantity: String
  }

  type Auth {
    _id: ID
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
    addRecipe(name: String! ingredients: [String]! instructions: String! calories: Int! prepTime: Int! image: String!): Recipe
    removeRecipe(recipeId: ID!): Recipe
    login(email: String! password: String!): Auth
  }
`;

module.exports = typeDefs;