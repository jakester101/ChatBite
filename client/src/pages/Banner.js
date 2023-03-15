import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div class=" text-center text-3xl ">
            <img class="w-full object-cover " style={{maxHeight: '700px'}} src="https://media.npr.org/assets/img/2013/02/26/dinner01_slide-3fe223f875768309fbe02165a865c9c09c969ad5.jpg"></img>
            <div>
                An easy way to cook Dinner!
            </div>
            <button className="w-42 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login/Sign Up
                        </button>
        </div>
      
    )
};

export default Banner;