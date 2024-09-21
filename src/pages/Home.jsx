/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Hero from "../header/Hero";
import FeaturesSection from "../body/FeaturesSection";
import { ProductContext } from "../context/ProductContext";
import Product from "../component/Product";
import { ImSpinner9 } from "react-icons/im";

const Home = () => {
  const { products, isLoading, error,  } = useContext(ProductContext);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
    <button
      type="button"
      className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center"
      disabled
    >
      <ImSpinner9  className="animate-spin h-5 w-5 mr-3" />
      Loading...
    </button>
  </div>

    );
    
  }

  if (error) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-black text-red-600">
      Error: {error.message} <br />
      <h2> Check internet connection and Refresh</h2>
      </div>
  }

  // Get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  return (
    <div >
      <Hero />
      <FeaturesSection />

      <section className="py-16 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

           
          
            
         
            
    