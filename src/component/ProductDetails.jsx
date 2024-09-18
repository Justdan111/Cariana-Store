/* eslint-disable no-unused-vars */
import React, {useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext} from '../context/ProductContext'
import { Link } from 'react-router-dom';



const ProductDetails = () => {
    // get product id
    const {id} = useParams();
    const { products } = useContext(ProductContext)
    const {  addToCart, isInCart} = useContext(CartContext)
        

     // get single product
     const product = products.find((item) => {
        return item.id === parseInt(id);
     });
    
     // change color when in cart
     const inCart = isInCart(product.id);

     // if product not found 
     if (!product) {
        return (
            <section className='h-screen flex justify-center items-center'>Loading...</section>
        )
     }

     
     const { title, price, description, image } = product;
    return ( 
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center '>
            <div className="container mx auto">
                {/* image and text wrap */}
                <div className='flex flex-col lg:flex-row items-center'>
                {/* image */}
                <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                    <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
                </div>
                {/* text */}
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'
                    >{title}</h1>
                    <div className='text-xl text-red-500 font-medium mb-6'>
                        $ {price}
                        </div>
                        <p className='mb-8'>{description}</p>
                        <button onClick={() => addToCart(product, product.id)} className={'bg-primary py-3 px-6 text-white'}>
                            {inCart ? "Added to cart" : "Add to cart"}
                            </button>

                       <button className='bg-primary text-white py-3 px-6 m-5 hover:bg-gray-500'>
                        <Link to="/shop"> Back to Shop</Link>
                       </button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProductDetails;