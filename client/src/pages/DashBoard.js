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
             
             <div className="w-3/4 p-8 h-screen text-2xl">
             <h2>Hungry but dont know what to make? </h2>
           Type in what ingredients you have and we will make a recipe for you!<br />Pleas type them in one at once sepperated by a space and a comma. <br />Then click the "Make New Recipe".
            <input 
                type="text"
                className="block w-half px-4 text-2xl shadow-xl py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Input"
               />       
                     <div className="mt-6">
                        <button className="w-full shadow-xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Make New Recipe
                        </button>
                    </div>
             </div>

        </div>
      )
  };

export default DashBoard;