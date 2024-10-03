import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-yellow-500 z-50 justify-between drop-shadow-2xl p-4">
      <a className="flex title-font font-medium items-center text-5xl  font-bold font-serif mb-4 md:mb-0">
        <span className="ml-3 text-5xl text-black">Jewellegance</span>
      </a>
      <div className="flex-grow md:flex md:justify-end">
        <nav className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-2xl text-black font-serif mb-4 md:mb-0">
          <Link href="/" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">Home</Link>
          <Link href="/about" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">About</Link>
          <Link href="/product" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">Product</Link>
          <Link href="/contact" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">Contact</Link>
        </nav>
        <button className="ml-0 md:ml-4 inline-flex items-center text-base bg-orange-500 text-white outline outline-2 outline-offset-2 px-2 py-1 rounded-lg transition duration-300
                hover:bg-red-600 hover:shadow-xl hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
                active:scale-95 active:ring-0
                hover:shadow-red-700/50">
          Order
          <AiOutlineCloudDownload className="text-xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;









