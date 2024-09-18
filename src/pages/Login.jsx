/* eslint-disable no-unused-vars */
import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../functions/LoginValidation";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"


const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginValidationSchema)
})

    const {register, handleSubmit, control, formState:{errors}} = form

    const { setIsAuthenticated} = useContext(AuthContext);

    const navigate = useNavigate();

    const [btnText, setBtnText] = useState('LOGIN')

    const sendToBackEnd = (values) => {
        alert(101);
        setBtnText('...loading')
        // send the values to the backend for processing or storage
        // console.log('values :', values)
       
            setTimeout(() => {
            setBtnText('Done');  // set the button text to done
            setIsAuthenticated(true);  
            setTimeout(() => {
            navigate('/checkout');  
            }, 2000);
         }, 3000);            
    }

  return (
    <section className="flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(sendToBackEnd)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-black">
            Username or email address*
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-black">
            Password*
          </label>
          <input
            type="password"
            id="password"
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            {...register("password")}
            
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 "
          disabled={btnText === '...loading'}
        >
           {btnText}
        </button>

        <a href="/password" className="block text-center mt-4 text-pink-500 hover:text-pink-600">
          Lost your password?
        </a>

        <div className="block text-center mt-4 text-black">  Create an account
              <Link to={'/signup'} className="text-pink-500 hover:text-pink-600"> SignUp </Link>
              </div>
      </form>

      <DevTool control={control} />
    </section>
  );
};

export default Login;
