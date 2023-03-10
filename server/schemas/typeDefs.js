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
    ingredients: [Ingredient]!
    instructions: String
    createdAt: String
    calories: Int
  }

  type Ingredient {
    _id: ID
    name: String!
    quantity: Int
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(recipeText: String!): Recipe
    removeRecipe(recipeId: ID!): Recipe
  }
`