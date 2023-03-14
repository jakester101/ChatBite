const {Recipe} = require('../models');

module.exports = {
    async getAllRecipes(req, res){
        const Recipe = await Recipe.find({});
        if(!recipe){
            return res.status(400).json({message: "No recipes found"})
        }
        res.status(200).json(recipe);
    },
    async getSingleRecipe(req, res){
        const Recipe = await Recipe.find({_id: params.id});
        if(!recipe){
            return res.status(400).json({message: "No recipe found with that id"})
        }
        res.status(200).json(recipe);
    },
    async createRecipe({body}, res){
        const Recipe = await Recipe.create(body);
        if(!user){
            return res.status(400).json({message: "unable to create recipe"})
        }
        res.status(200).json(user);

    },
    async updateRecipe(req, res){
        const Recipe = await Recipe.findOneAndUpdate(
            {}
        )
        if(!user){
            return res.status(400).json({message: "unable to update recipe"})
        }
        res.status(200).json(user);
    }
}