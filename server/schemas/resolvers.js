const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('recipes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('recipes');
    }, 
    recipes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Recipe.find(params).sort({ createdBy: -1 })
    },
    recipe: async (parent, { recipeId }) => {
      return Recipe.findOne({ _id: recipeId });
    },
    // me: async (parent, args, context) => {
    //   if(context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('recipes');
    //   }
    //   throw new AuthenticationError('Log in before your attempt')
    // }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return { user };
    },
  }
}

module.exports = resolvers;