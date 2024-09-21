import { PiTruck } from "react-icons/pi";
import { IoWalletSharp } from "react-icons/io5";
import { TfiUnlock } from "react-icons/tfi";
import { RiVerifiedBadgeLine } from "react-icons/ri";

const FeaturesSection = () => {
  return (
    <div className="p-4 sm:p-8 flex flex-col sm:flex-row gap-8 text-center">
      <div className="flex flex-col items-center flex-1">
        <div className="mb-4 p-4 bg-gray-100 rounded-full">
          <PiTruck className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold">FREE DELIVERY FROM $250</h3>
        <p className="text-gray-500 text-sm mt-2">Get free shipping on orders over $250.</p>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="mb-4 p-4 bg-gray-100 rounded-full">
          <IoWalletSharp className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold">MONEY BACK GUARANTEED</h3>
        <p className="text-gray-500 text-sm mt-2">Enjoy peace of mind with our hassle-free returns policy.</p>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="mb-4 p-4 bg-gray-100 rounded-full">
          <TfiUnlock className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold">SECURE PAYMENT</h3>
        <p className="text-gray-500 text-sm mt-2">Your transactions are safe with our top-notch security.</p>
      </div>
      <div className="flex flex-col items-center flex-1">
        <div className="mb-4 p-4 bg-gray-100 rounded-full">
          <RiVerifiedBadgeLine className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold">AUTHENTICITY 100% GUARANTEED</h3>
        <p className="text-gray-500 text-sm mt-2">We ensure genuine products with every purchase.</p>
      </div>
    </div>
  );
};

export default FeaturesSection;
