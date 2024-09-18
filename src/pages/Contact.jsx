
import { IoMdMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = () => {
    return ( 
    <div className=""> 
<div className="flex flex-col md:flex-row justify-around items-start md:items-center py-8 space-y-4 md:space-y-0">
  <p className="flex items-center space-x-2 mb-4 md:mb-0">
    <IoMdMail className=" text-xl" />
    <span>Email:</span>
    <a href="mailto:support@cariana.com" className="underline ">
      support@cariana.com
    </a>
  </p>
  <p className="flex items-center space-x-2">
    <IoHome className=" text-xl" />
    <span>Address:</span>
    <span>Miami, Florida</span>
  </p>
  <p className="flex items-center space-x-2">
    <FaSquarePhone className=" text-xl" />
    <span>Phone:</span>
    <a href="tel:1-800-123-4567" className="underline ">
      1-800-123-4567
    </a>
  </p>
</div>


<iframe className="w-[100%] h-[450px]"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14534588.776187766!2d-94.50417839872475!3d27.203963030006303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sng!4v1724850364543!5m2!1sen!2sng"
 allowFullScreen="" 
 loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">

  </iframe>

      

<section className="w-full max-w-2xl mx-auto py-12 md:py-16 px-4 md:px-6 bg-gray-50 rounded-lg shadow-lg m-20">
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
      <p className="text-gray-600">
        Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
        possible.
      </p>
    </div>


    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>


      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" placeholder="Enter your message" className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 min-h-[120px]" />
      </div>
      
      <button type="submit" className="w-full bg-black text-white py-2 rounded-md shadow-md hover:bg-slate-950 focus:outline-none ">
        SEND MESSAGE
      </button>
    </form>
  </div>
</section>


<p className="text-center mt-8">
Stay stylish, <br /> The Cariana Team </p>
     
      
    </div> );
}
 
export default Contact;



