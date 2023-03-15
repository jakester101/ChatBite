import { Link, } from "react-router-dom";
import React, {useState} from "react"



const Login = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://localhost:3001/api/user/login',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        }) .then((res) => {
            if(res.ok) {
                setIsLoggedIn(true)
            } else {
                console.log("error")
            }
        })
        
        // const data = await response.json();
        // console.log("response data", data)
        // if(data.success === true) {
        //     console.log("redirecting to /dashboard")
        //     setIsLoggedIn(true)
        // }else {
        //     console.log("failure")
        // }

        console.log("location.href", window.location.href)

    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };


    
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                   Login
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                         {isLoggedIn ? (
                            <Link to="/dashboard" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </Link>
                        ) : (
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        )}
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link 
                        to="/sign-up"
                        className="font-medium text-purple-600 hover:underline"
                    >Sign up</Link>
                </p>
            </div>
        </div>
      )
  };
  
export default Login;