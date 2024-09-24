/* eslint-disable no-unused-vars */
import React, {  useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../functions/LoginValidation";
import { Link, Navigate } from "react-router-dom";
import { doSignINWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const { userLoggedIn } = useAuth();


   const [isSigningIn, setIsSigningIn] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const { register, handleSubmit, control, formState: { errors } } = form;

  const onSubmit = async ({ email, password })  => {
    console.log({ email, password });
    if(!isSigningIn) {
      setIsSigningIn(true);
      await doSignINWithEmailAndPassword(email, password)
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if(!isSigningIn) {
      setIsSigningIn(true)
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
    }
  }

  return (
    <>
     {userLoggedIn && (<Navigate to={'/account'} replace={true} /> )}
    <section className="flex justify-center items-center h-screen  " >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>
             

              <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                      Email address*
                  </label>
                  <input
                      type="text"
                      id="email"
                      placeholder="Enter your email address"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      {...register("email")} />
                  {errors.email && (
                      <span className="text-red-500 text-sm mt-1">
                          {errors.email.message}
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
                      {...register("password")} />
                  {errors.password && (
                      <span className="text-red-500 text-sm mt-1">
                          {errors.password.message}
                      </span>
                  )}
              </div>


             

              <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                  LogIn
              </button>

              <div className="block text-center mt-4 text-black">  Don't have an account?
              <Link to={'/signup'} className="text-pink-500 hover:text-pink-600"> Signup </Link>
              </div>

                    <button 
        className="w-full text-black py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        onClick={(e) => onGoogleSignIn(e)} 
      >
        Continue With Google
      </button>


      </form> 
      
    </section>
    </>
  );
};

export default Login;
