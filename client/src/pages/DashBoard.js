import { Link } from "react-router-dom";
import React, { useState } from "react";
import { fetchData } from "../fetch";

import RecipeCard from './RecipeCard'; // Import RecipeCard component

import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';

const DashBoard = () => {
    
    const [params, setParams] = useState("");
    const [recipe, setRecipe] = useState(null);
    const [image, setImage] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [addRecipe] = useMutation(ADD_RECIPE);

    const [rList, setRList] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await recipeList();
        setRList(data);
      };
  
      fetchData();
    }, []);

  
    // console.log(rList);
    let list = rList.map((recipe) => (<button className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"key={recipe._id} onClick = {console.log(`${recipe.name} selected`)}>{recipe.name}</button>));

    const handleFetchData = async (params) => {
      setShowSpinner(true);
      try {
        const { recipeData, imageData } = await fetchData(params);
        setRecipe(recipeData);
        setImage(imageData);
      } catch (error) {
        console.error(error);
      } finally {
        setShowSpinner(false);
      }
    };

    const saveRecipe = async () => {
      const recipeData = JSON.parse(localStorage.getItem("recipeData"));
      const imageData = JSON.parse(localStorage.getItem("imageData"));
    
      if (recipeData && imageData) {
        const input = {
          name: recipeData.name,
          ingredients: recipeData.ingredients,
          instructions: recipeData.instructions,
          calories: recipeData.calorieCount,
          prepTime: recipeData.prepTime,
          image: imageData.data[0].url
        };
    
        try {
          // Call the addRecipe mutation
          const { data } = await addRecipe({ variables: input });
          console.log("Recipe added:", data);
        } catch (error) {
          console.error("Error adding recipe:", error);
        }
      } else {
        console.log("No data to save");
      }
    };
    
    return (
      <div className="w-full flex justify-center h-screen">
        <div className="w-1/4 p-8 border-solid border-r-4 h-screen">
            Previous Recipes
            <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search"
            />
            <div className="mt-6">
                <button className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Search
                </button>
            </div>
            <br />
            <div>place holder text</div>
            <div>place holder text</div>
            <div>place holder text</div>
        </div>

        {/* <div className="w-3/4 p-8 h-screen text-2xl"> */}
            {/* <h2>Hungry but dont know what to make? </h2>
            Type in what ingredients you have and we will make a recipe for you!
            <br />
            Please type them in one at a time separated by a space and a comma.
            <br />
            Then click the "Make New Recipe". */}
            <div className="w-3/4 p-8 h-screen text-3xl">
                {/* <h2>Hungry but dont know what to make?<br />Type in what ingredients you have and we will make a recipe for you!</h2> */}
                {/* <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search"
                    /> */}
                    {/* <div className="mt-6 "> */}
                        {/* <button className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Search
                        </button> */}
                    {/* </div> */}
                    {/* <br></br> */}
                    <ul>
                        {list}
                    </ul>
             {/* </div> */}
             <div className="w-3/4 p-8 h-screen text-3xl">
             <h2>Hungry but dont know what to make?<br />Type in what ingredients you have and we will make a recipe for you!</h2>
             <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search"
                
                    value={params}
                    onChange={(e) => setParams(e.target.value)}
                />
                <div className="mt-6">
                    <button
                        className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        onClick={() => {
                            handleFetchData(params);
                        }}
                    >
                        Make New Recipe
                    </button>
                </div>
                <div className="flex justify-center items-center h-full">
                    <RecipeCard recipe={recipe} image={image} onSave={saveRecipe} />
                </div>
            </div>
            {showSpinner && (
                <div className="spinner absolute bottom-1/3 right-1/3 -mt-4 -ml-4 border-t-4 border-b-4 border-purple-700 h-8 w-8 rounded-full animate-spin"></div>
            )}
        </div>
    </div>
);  
    };

export default DashBoard;