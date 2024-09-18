/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { Login, Home, Shop, Contact, AboutUs } from './pages'; 
import Account from "./sidePages/Account";
import Checkout from "./sidePages/CheckOut";
import Wishlist from "./sidePages/WishList";
import Cart from "./sidePages/Cart";
import Layout from "./layout/Layout";
import ProductDetails from "./component/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./component/SignUp"
import ProtectedRoute from "./functions/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={ <Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
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
