// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="flex justify-between bg-transparent drop-shadow-2xl">
//       <div>
//         <h1 className="text-5xl text-white font-bold font-serif p-4">Jewelegance</h1>
//       </div>

//       <ul className="flex gap-6 p-3 justify-between font-serif text-2xl text-white ">
//         <li className="flex gap-6 p-3  font-serif text-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="flex gap-6 p-3  font-serif text-2xl transition ease-in-out delay-150  hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50  duration-300">
//           <Link href="/about">About</Link>
//         </li>

//         <li className="flex gap-6 p-3  font-serif text-2xl transition ease-in-out delay-150  hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">
//           <Link href="/product">Products</Link>
//         </li>
//         <li className="flex gap-6 p-3  font-serif text-2xl transition ease-in-out delay-150  hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50  duration-300">
//           <Link href="/contact">Contact</Link>
//         </li>
//         <button className="text-base bg-orange-500 text-white outline outline-2 outline-offset-2 px-2 py-0 rounded-lg transition duration-300
//                 hover:bg-red-600 hover:shadow-xl hover:scale-105
//                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
//                 active:scale-95 active:ring-0
//                 hover:shadow-red-700/50 ">
//           Online Order
//         </button>
//       </ul>
//     </header>
//   );
// }

// import Link from "next/link";
// import React from "react";
// import { AiOutlineCloudDownload } from "react-icons/ai";

// const NavBar = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center bg-transparent z-50 sticky top-0 justify-between drop-shadow-2xl p-4">
//       <a className="flex title-font font-medium items-center text-5xl text-white font-bold font-serif mb-4 md:mb-0">
//         <span className="ml-3 text-3xl">Jewellegance</span>
//       </a>
//       <div className="flex-grow md:flex md:justify-end">
//         <nav className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-2xl text-white font-serif text-2xl mb-4 md:mb-0">
//           <Link href="/" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">Home</Link>
//           <Link href="/about" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">About</Link>
//           <Link href="/product" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">Product</Link>
//           <Link href="/contact" className="transition ease-in-out delay-150 hover:bg-red-600 hover:shadow-xl hover:scale-105 hover:shadow-red-700/50 duration-300">Contact</Link>
//         </nav>
//         <button className="ml-0 md:ml-4 inline-flex items-center text-base bg-orange-500 text-white outline outline-2 outline-offset-2 px-2 py-1 rounded-lg transition duration-300
//                 hover:bg-red-600 hover:shadow-xl hover:scale-105
//                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75
//                 active:scale-95 active:ring-0
//                 hover:shadow-red-700/50">
//           Order
//           <AiOutlineCloudDownload className="text-xl ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

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









