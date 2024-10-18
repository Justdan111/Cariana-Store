/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React from "react"
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { Home, Shop, Contact, AboutUs } from './pages'; 
import Account from "./sidePages/Account";
import Checkout from "./sidePages/CheckOut";
import Wishlist from "./sidePages/WishList";
import Cart from "./sidePages/Cart";
import Layout from "./layout/Layout";
import ProductDetails from "./component/ProductDetails";
import ErrorPage from "./pages/ErrorPage";

import ProtectedRoute from "./functions/ProtectedRoute";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";


const router = createHashRouter(
  createRoutesFromElements(
    <>
     
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={  <ProtectedRoute> <Checkout /> </ProtectedRoute>} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      
    </Route>

    <Route path="*" element={<ErrorPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
