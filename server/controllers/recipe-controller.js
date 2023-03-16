const Recipe = require('../models/Recipe');

module.exports = {
    async getAllRecipes(req, res){ 
            const recipe = await Recipe.find({});
            if(!recipe){
                return res.status(400).json({message: "No recipes found"})
            }
            res.status(200).json(recipe);
    },
    async getSingleRecipe(req, res){
        const recipe = await Recipe.findOne({_id: req.params.id});
        if(!recipe){
            return res.status(400).json({message: "No recipe found with that id"})
        }
        res.status(200).json(recipe);
    },
    async createRecipe(req, res) {
        try {
          const recipe = await Recipe.create(req.body);
          res.status(200).json(recipe);
        } catch (error) {
          console.error("Error creating recipe:", error);
          res.status(400).json({ message: "Unable to create recipe" });
        }
    },      
    async updateRecipe(req, res){
        const recipe = await Recipe.findOneAndUpdate(
            {}
        )
        if(!recipe){
            return res.status(400).json({message: "unable to update recipe"})
        }
        res.status(200).json(recipe);
    },
    async getAllPublicRecipes(req,res){
        try{
            const recipe = await Recipe.find({isPublic:true});
            console.log(recipe);
                    if(!recipe){
                        return res.status(400).json({message: "No recipes found"})
                    }
                    res.status(200).json(recipe);
        }catch(err){console.log(err);}
    }
}