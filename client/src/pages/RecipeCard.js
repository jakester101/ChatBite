import React from 'react';

const RecipeCard = ({ recipe, image }) => {
  return (
    <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', boxSizing: 'border-box' }}>
      <img src={image.data[0].url} alt={recipe.name} style={{ width: '100%', objectFit: 'cover', height: '200px', borderRadius: '8px' }} />
      <h3 style={{ marginTop: '16px', marginBottom: '8px' }}>{recipe.name}</h3>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Instructions:</strong> {recipe.instructions.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
      <p><strong>Calorie Count:</strong> {recipe.calorieCount}</p>
    </div>
  );
};

export default RecipeCard;
