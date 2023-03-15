import React from 'react';

const RecipeCard = ({ recipe, image, onSave }) => {
    
  if (!recipe || !image || !image.data || !image.data[0]) {
    return null;
  }

  const instructions = recipe.instructions.split(/(?:\r\n|\r|\n)/g).map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image.data[0].url} alt={recipe.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.name}</div>
        <p className="text-gray-700 text-base">{recipe.description}</p>
        <br />
        <p className="text-gray-700 text-base">
          <strong>Instructions:</strong>
          <br />
          {instructions}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Prep Time:</strong> {recipe.prepTime}
        </p>
        <p className="text-gray-700 text-base font-bold">
          <strong>Calorie Count:</strong> {recipe.calorieCount}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button onClick = {onSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save
      </button>
      </div>
    </div>
  );
};

export default RecipeCard;