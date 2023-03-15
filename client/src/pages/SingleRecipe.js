import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_RECIPE } from '../utils/queries';

const SingleRecipe = () => {
  const { recipeId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_RECIPE, {
    variables: { recipeId: recipeId },
  });

  const recipe = data?.recipe || {};

  if (loading) {
    return <div> Loading... </div>;
  }
  return (
    <div className="App h-screen flex justify-center items-center">
      <div className='min-h-50vh min-w-70vh gap-y-3'>
        <div className='flex justify-center items-center w-full h-12 bg-purple-700'>
          <h1 className='text-white text-2xl font-bold'>Recipe for {recipe.name}</h1>
        </div>
          <div className='py-3 flex-row'>
            <p className='flex gap-x-3'>             
              <img className='h-36' src={recipe.image}></img>
              <span className='font-bold mr-2 text-lg'>Description:</span> {recipe.description}
            </p>
          </div>
          <div className='flex-col justify-start max-w-50vh'>
            <blockquote className='flex justify-start text-left gap-y-3'>
              <span className='font-bold mr-2 text-lg'>Instruction:</span> {recipe.instruction}
            </blockquote>
            <br/>
            <p className='text-left'>
              <span className='font-bold mr-2 text-lg'>Prep time: </span> {recipe.prepTime}
            </p>
            <p className='text-left'>
              <span className='font-bold mr-2 text-g'>Calories: </span> {recipe.calories}
            </p>
          </div>
      </div>
    </div>
  );
}

export default SingleRecipe;