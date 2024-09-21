/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { IoMenuOutline, IoSearch } from 'react-icons/io5';
import { GiShoppingBag } from 'react-icons/gi';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { ProductContext } from '../context/ProductContext';


const Navbar = () => {
  const { isOpen, setIsOpen,   } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const { products } = useContext(ProductContext)
  const [search, setSearch] = useState("")
  const [ result, setResult] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const [smallScreen, setSmallScreen] = useState(false);
  const handleSmallScreen = () => {
    setSmallScreen(true)
  }

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible); 
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };


  // search product fuction
  const searchProducts = () => {
    const filteredProducts = products.filter((product) => {
      const searchTerm = search.toLowerCase()
      const title = product.title.toLowerCase()
      const category = product.category.toLowerCase()
      return title.includes(searchTerm) || category.includes(searchTerm)
    });
    setResult(filteredProducts);
  }

  useEffect(() => {
    if (search) {
      return searchProducts()
    }else {
      return setResult([])
    }
  }, [search, products]);

  return (
    <>
      <nav className=" sticky top-0 py-5 px-10 flex justify-between w-full items-center border-b border-gray-200 bg-white z-10">
      <div className='lg:hidden md:hidden flex items-center -ml-4 mr-3  border-y border-black' onClick={handleSmallScreen}> Menu</div>
       <Link to="/"> 
       <h1 className="text-3xl font-bold ">Cariana</h1>
       </Link>
        <div className="ml-10 sm:hidden md:flex lg:flex">
          <Link to='/' className="ml-4 no-underline p-1.5 text-sm hover:text-pink-500">Home</Link>
          <Link to='/shop' className="ml-4 no-underline p-1.5 text-sm hover:text-pink-500">Shop</Link>
          <Link to='/about' className="ml-4 no-underline p-1.5 text-sm hover:text-pink-500">About Us</Link>
          <Link to='/contact' className="ml-4 no-underline p-1.5 text-sm hover:text-pink-500">Contact</Link>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="cursor-pointer flex relative items-center no-underline p-1.5 text-sm hover:text-pink-500" onClick={() => setIsOpen(!isOpen)}>
            <GiShoppingBag className="mr-1" />
            <div className="bg-slate-100 absolute -right-2 top-0 text-[12px] w-[18px] text-black rounded-full flex justify-center items-center">
              {itemAmount}
            </div> 
            Cart
            
          </div>
          <div className="flex items-center no-underline p-1.5 text-sm hover:text-pink-500" onClick={toggleSearch}>
            <IoSearch className="mr-1" />
          </div>
          <div className="flex items-center no-underline p-1.5 text-sm hover:text-pink-500" onClick={toggleMenu}>
            <IoMenuOutline className="mr-1" />
          </div>

          
        </div>
      </nav>


        {/* Mobile Menu */}
       
        {smallScreen && (
        <div className="fixed top-0   items-start justify-center   h-full w-1/2  z-50 flex flex-col bg-white border-t border-gray-200  ">
           <div onClick={() => {
          setSmallScreen(false)
        }}
         className='fixed top-7 scale-150 ml-40 '>
             <IoCloseSharp className='h-full w-full'/>
             </div>
          <ul className="flex flex-col mt-9"  onClick={() => {
          setSmallScreen(false)
        }}>
            <li><Link to="/" className="block p-4 hover:bg-gray-100">Home</Link></li>
            <li><Link to="/shop" className="block p-4 hover:bg-gray-100">Shop</Link></li>
            <li><Link to="/about" className="block p-4 hover:bg-gray-100">About Us</Link></li>
            <li><Link to="/contact" className="block p-4 hover:bg-gray-100">Contact</Link></li>
          </ul>
        </div>
      )}


           {/* side menu */}
      {isMenuVisible && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={toggleMenu} >
        <div className=" fixed top-0 -right-0 justify-center items-center  h-full w-64  z-50 flex  bg-white border-t border-gray-200   " >
         

         
          
          <div className="  text-black p-14 my-5  gap-y-4 ">
          <div onClick={() => {
          toggleMenu(false)
        }}
         className='absolute top-7 scale-150 ml-3'>
             <IoCloseSharp className='h-full w-full'/>
             </div>
        

            <ul onClick={() => {
          toggleMenu(false)
        }}>
                   
              <li className='hover:text-pink-500'>
              <Link to= '/account'> My Account</Link>
               
                </li>

              <li className='hover:text-pink-500'>
              <Link to= '/checkout'> Checkout</Link>
                
                </li>

              <li className='hover:text-pink-500'>
              <Link to= '/wishlist'> Wishlist</Link>
                
                </li>

              <li className='hover:text-pink-500'>
                <Link to= '/cart'> Shopping Cart</Link>
                
                </li>
                
            </ul>
          </div>
        </div>
        </div>
      )}
   

         {/* search logic */}
         {isSearchVisible && (
         <div   
         className="fixed top-0 right-0 z-50 flex items-start justify-end bg-black bg-opacity-60  h-full w-full">
  {/* Search modal container */}
  <div className="bg-white p-4 rounded w-full sm:w-96 h-full shadow-lg" >
    {/* Close button */}
    <IoCloseSharp
      onClick={() => setSearchVisible(false)}
      className="cursor-pointer w-6 h-6 text-gray-500 absolute top-4 right-4"
    />

    {/* Search input */}
    <div className='flex gap-2'>
    <input
      type="text"
      value={search}
      placeholder="Search..."
      className="p-2 border rounded w-full mt-10"
      onBlur={() => setSearchVisible(false)}
      onChange={handleChange}
    />
    </div>

    {/* Search results */}
    
    <div className="search-results mt-4 overflow-y-scroll h-full" onClick={() => setSearchVisible(false)} >
      {result.length > 0 ? (
        result.map((product) => (
          <Link to={`/product/${product.id}`}>
           
          <div key={product.id} className="border-black border-2 p-2 rounded my-2 flex gap-x-4 py-2 ">
            <img className="max-w-[40px]" src={product.image} alt="" />
            <div>{product.title}</div>
           
            
          </div>
          </Link>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  </div>
</div>

)}

    </>
  );
};

export default Navbar;