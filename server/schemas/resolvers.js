const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');

const resolvers = {
  Query: {
    users: async (parent, { username }) => {
      return User.find(username).populate('ingredients');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('ingredients');
    },
    ingredients: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Recipe.find(params);
    },
    ingredient: async (parent, { ingredientId }) => {
      return Recipe.findOne({ _id: ingredientId });
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return { user };
    }
  },
}

module.exports = resolvers;

