import { Link } from "react-router-dom";
import React, { useState } from "react";
import { fetchData, promptDenied } from "../fetch";

const DashBoard = () => {
    const [params, setParams] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const handleFetchData = async (params) => {
        setShowSpinner(true);
        try {
          await fetchData(params);
        } catch (error) {
          console.error(error);
        } finally {
          setShowSpinner(false);
        }
      };

    return (

        <div className="w-full flex justify-center h-screen">
            <div className="w-1/4 p-8 border-solid border-r-4 h-screen" >
                Previous Recipes
                <input 
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search"
                    />
                    <div className="mt-6 ">
                        <button className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Search
                        </button>
                    </div>
                    <br></br>
                <div>
                    place holder text
                </div>
                <div>
                    place holder text
                </div>
                <div>
                    place holder text
                </div>
             </div>
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
                        <button className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                 onClick={() => {
                                    handleFetchData(params);
                                  }}
                        >
                            Make New Recipe
                        </button>
                    </div>
             </div>
             {showSpinner && (
             <div className="spinner absolute bottom-1/3 right-1/3 -mt-4 -ml-4 border-t-4 border-b-4 border-purple-700 h-8 w-8 rounded-full animate-spin"></div>
             )}
        </div>
        
      )
  };

export default DashBoard;