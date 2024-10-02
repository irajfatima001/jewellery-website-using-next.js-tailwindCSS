import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Image from "next/image";
import aboutImage from "../../public/images/j20.jpg";

export default function About() {
  return (
    <div className=" bg-none">
        <Header />
      <div className="flex flex-col items-center justify-between p-6  bg-gradient-to-r from-gray-200 to-gray-800">
        
        <h1 className="text-4xl text-white italic font-bold mb-6 ">About us</h1>
        <div className="flex items-center justify-between w-full max-w-3xl mb-6">
            
          <div className="relative w-1/2 h-60"> 
            <Image
              src={aboutImage}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-4xl hover:shadow-xl hover:scale-105"
            />
            
          </div>
          <div className="w-1/2 pl-6"> 
            <p className="text-lg mb-4 flex items-center">
              We are passionate about creating exquisite jewelry that tells a story. Founded in 2024, our journey began with a vision to blend artistry and craftsmanship to bring you unique pieces that celebrate life's most precious moments.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
          <div
            className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
                hover:bg-orange-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-orange-700/50"
          >
            <h2 className="font-bold font-serif">Our Mission</h2>
            <p className="text-lg mb-4 text-center">
              We aim to provide beautifully designed jewelry that reflects the
              individuality of our customers. Each piece is crafted with
              attention to detail and a commitment to quality, ensuring that you
              wear not just an accessory, but a statement of who you are.
            </p>
          </div>
          <div
            className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
                hover:bg-orange-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-orange-700/50"
          >
            <h2 className="font-bold font-serif">Our Values</h2>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                 Quality: We prioritize the finest materials and
                craftsmanship.
              </li>
              <li className="mb-2">
                 Sustainability: We are committed to ethical sourcing and
                eco-friendly practices.
              </li>
              <li className="mb-2">
                 Customer Connection: We value our customers and strive to
                build lasting relationships.
              </li>
            </ul>
          </div>
          <div
            className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
                hover:bg-orange-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-orange-700/50"
          >
            <h2 className="font-bold font-serif">Join Our Journey</h2>
            <p className="text-lg mb-4 text-center">
              We invite you to explore our collection and find the perfect piece
              that resonates with your story. Thank you for being a part of
              [Jewelegance] family!
            </p>
          </div>
        </div>
        <button
          className="bg-orange-400 text-white outline outline-2 outline-offset-2 px-4 py-2  rounded-lg transition duration-300 
                hover:bg-red-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-red-700/50"
        >
          Shop Now
        </button>
      </div>
      <Footer />
    </div>
  );
}
