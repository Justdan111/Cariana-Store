/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CartItem = ({ item }) => {
    const { removeFromCart, } = useContext(CartContext);
    const { truncateText } = useContext(ProductContext);

    const {id, title, image, price, amount} = item; 
    return   (
    <div className="flex  gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
        <div className="w-full min-h-[150px] flex items-center gap-x-4 "> 

           {/* {image} */}
           <Link to={`/product/${id}`}>
            <img className="max-w-[40px]" src={image} alt="" />
           </Link>
           <div className="w-full flex flex-col ">

            {/* title & remove icon */}
            <div className="flex  justify-between mb-2 ">

                {/* title */}
                <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-red-950 hover:text-primary">
                    {truncateText (title, 40)}
                </Link>


                    {/*remove icon  */}
                    <div 
                    onClick={() => removeFromCart(id)} className="text-xl cursor-pointer ml-2">
                       <RiDeleteBinLine  className="text-gray-500 hover:text-red-500 transition"/>
                    </div>
            </div>

            <div className=" flex h-[36px] text-sm">

               
                 {/* amount */}
                 <div className="h-full flex justify-center items-center mr-2 ">
                    {amount} x </div>
                             
                   
          {/* final price */}

                 <div className="flex-1 flex  items-center text-primary font-medium">${price}</div>
                 
            </div>
           </div>
        </div>
    </div>
);
}
 
export default CartItem;
