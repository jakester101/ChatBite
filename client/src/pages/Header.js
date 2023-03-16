import { Link } from "react-router-dom";
import React from "react";



const Header = () => {
   
    return (
        <div style={{fontFamily:'Orbitron'}}>
            <header className="w-full shadow-xl p-4 mb-2 bg-purple-800">
                <h2 className="text-center text-6xl text-white">ChatBite</h2>
            </header>
        </div>
      )
  };
  
export default Header;