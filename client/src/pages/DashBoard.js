import { Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="w-full flex justify-center h-screen">
            <div className="w-1/4 p-8 border-solid border-r-4 h-screen" >
                Previous Recipes
                <input 
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search"
                    />
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
             <div className="w-3/4 p-8 h-screen">
             <h2>Hungry but dont know what to make?<br />Type in what ingredientsyou have and we will make a recipe for you!</h2>
            <input 
                type="text"
                className="block w-half px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Type in what ingredients you have:"
               />
             </div>
        </div>
      )
  };

export default DashBoard;