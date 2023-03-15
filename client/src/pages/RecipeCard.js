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
    <div className='flex justify-center items-center h-screen flex-col gap-y-10'>
      <div className="max-w-50vh min-h-40vh rounded overflow-hidden shadow-2xl">
        <div className='flex justify-center min-w-max py-5 bg-purple-700'>
          <img className="max-w-20vh" src={image.data[0].url} alt={recipe.name} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.name}</div>
          <blockquote className="text-gray-700 text-base"> <strong>{recipe.description}</strong>
          <br/>
          </blockquote>
          <br />
          <blockquote className="text-gray-700 text-base">
            <strong>Instructions:</strong>
            <br />
            {instructions}
          </blockquote>
          <p className="text-gray-700 text-base">
            <strong>Prep Time:</strong> {recipe.prepTime}
          </p>
          <p className="text-gray-700 text-base font-bold">
            <strong>Calorie Count:</strong> {recipe.calorieCount}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <button onClick = {onSave} className="bg-purple-700 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        </div>
      </div>
    </div>
    );
};

export default RecipeCard;