
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "../functions/LoginValidation";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword,} from "../firebase/auth";
import { useAuth } from "../context/AuthContext";


const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const [isRegistering, setIsRegistering] = useState(false)

  const { userLoggedIn } = useAuth();

  const { register, handleSubmit, control, formState: { errors } } = form;

  const onSubmit = async ({ email, password }) => {
    console.log({ email, password });
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password).catch((err) => {
        console.error(err);
        setIsRegistering(false);
      });
    }
  };
  

  return (
    <>
     {userLoggedIn && (<Navigate to={'/account'} replace={true} /> )}
    <section className="flex justify-center items-center h-screen  " >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h1 className="text-2xl font-bold mb-6 text-center">SIGNUP</h1>
              <h2 className="text-xl, font-semibold mb-6 text-center">Create An Account</h2>

              {/* <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-medium text-black">
                      Username*
                  </label>
                  <input
                      type="text"
                      id="username"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      {...register("username")} />
                  {errors.username && (
                      <span className="text-red-500 text-sm mt-1">
                          {errors.username.message}
                      </span>
                  )}
              </div> */}

              <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                      Email address*
                  </label>
                  <input
                      type="text"
                      id="email"
                      placeholder="Enter a valid email address"
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
                      placeholder="Enter a strong password"
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
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                  SIGNUP
              </button>

              <div className="block text-center mt-4 text-black">  Already have an account?
              <Link to={'/login'} className="text-pink-500 hover:text-pink-600"> Login </Link>
              </div>


              {/* <h1 className="text-center m-10 ">OR</h1>

<button
className="w-full flex items-center justify-center text-primary font-semibold bg-white py-2 px-4 rounded-md shadow-md border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105"
onClick={(e) => onGoogleSignIn(e)}
>
<img src={google} alt="Google logo" className="w-6 h-6 mr-3" />
Continue With Google
</button> */}

      </form> 
      
    </section>
    </>
  );
};

export default SignUp;
