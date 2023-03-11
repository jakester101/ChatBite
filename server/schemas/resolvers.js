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
    recipe: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Recipe.find();
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
  }
}

module.exports = resolvers;