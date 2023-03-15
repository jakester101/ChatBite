const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');

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
      return Recipe.find(params).sort({ createdAt: -1 })
    },
    recipe: async (parent, { recipeId }) => {
      return Recipe.findOne({ _id: recipeId });
    },
    me: async (parent, args, context) => {
      if(context.user) {
        return User.findOne({ _id: context.user._id }).populate('recipes');
      }
      throw new AuthenticationError('Log in before your attempt')
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return { user };
    },
    addRecipe: async (parent, { name, instructions, calories, prepTime }, context) => {
      if (context.user) {
        const recipe = await  Recipe.create({
          name,
          instructions,
          calories,
          prepTime,
          createdBy: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id},
          { $addToSet: { recipes: recipe._id}}
        )
        return recipe;
      }
      throw new AuthenticationError('You need to log in')
    },
    removeRecipe: async (parent, { recipeId }, context) => {
      if (context) {
        const recipe = await Recipe.findOneAndDelete({
          _id: recipeId,
          createdBy: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { recipes: recipe._id }}
        );
        return recipe;
      }
      throw new AuthenticationError('You need to log in')
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('You enter either wrong email or password');
      }
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('You enter either wrong email or password');
      }

      return { user };
    }
  },
}

module.exports = resolvers;