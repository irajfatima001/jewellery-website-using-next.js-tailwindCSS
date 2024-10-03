import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import backgroundImage from "../public/images/j2.jpg";
import necklaceImage from "../public/images/j29.jpg";
import earringsImage from "../public/images/j28.jpg";
import ringImage from "../public/images/j25.jpeg";
import braceletImage from "../public/images/j26.jpg";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 bg-black bg-opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white transition ease-in-out delay-150 hover:shadow-4xl hover:scale-110 duration-300">
            Unveil Your Sparkle
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center text-white font-bold font-serif hover:scale-110 duration-300">
            Discover Handcrafted Elegance
          </p>
          <button
            className="bg-orange-400 text-white outline outline-2 outline-offset-2 px-6 py-2 rounded-lg transition duration-300 
            hover:bg-red-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
            active:scale-95 active:ring-0 hover:shadow-red-700/50"
          >
            Shop Now
          </button>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 font-serif pl-3 mt-10">
        Our Collection
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 mt-5">
        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50"
        >
          <div className="relative mb-4 h-56 w-full hover:scale-110 duration-1000">
            <Image
              src={necklaceImage}
              alt="Fine Necklaces"
              layout="fill"
              objectFit="cover"
              className="rounded-lg "
            />
          </div>
          <h4 className="font-bold font-serif">Fine Necklaces</h4>
          <p>
            Adorn your neckline with our stunning designs, from delicate chains
            to bold statement pieces.
          </p>
        </div>

        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50">
          <div className="relative mb-4 h-56 w-full hover:scale-110 duration-1000">
            <Image
              src={earringsImage}
              alt="Elegant Earrings"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="font-bold font-serif">Elegant Earrings</h4>
          <p>
            Elevate your style with earrings that sparkle and shine, perfect for
            any occasion.
          </p>
        </div>

        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50"
        >
          <div className="relative mb-4 h-56 w-full hover:scale-110 duration-1000">
            <Image
              src={ringImage}
              alt="Stunning Rings"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="font-bold font-serif">Stunning Rings</h4>
          <p>
            Find the perfect ring, whether it’s for an engagement, anniversary,
            or just because.
          </p>
        </div>
        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50"
        >
          <div className="relative mb-4 h-56 w-full hover:scale-110 duration-1000">
            <Image
              src={braceletImage}
              alt="Bracelets and Bangles"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="font-bold font-serif">Bracelets and Bangles</h4>
          <p>
            Add a touch of sophistication to your wrist with our versatile
            selection.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4 font-serif pl-3 mt-10">
        Why Choose Us?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50"
        >
          <h4 className="font-bold font-serif">Quality Craftsmanship</h4>
          <p>
            Each piece is crafted with precision and care, ensuring you receive
            jewelry that lasts a lifetime.
          </p>
        </div>
        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50"
        >
          <h4 className="font-bold font-serif">Unique Designs</h4>
          <p>
            Our designs are inspired by the beauty of nature and the elegance of
            life, making each piece truly unique.
          </p>
        </div>
        <div
          className="bg-orange-400 text-white hover:text-black p-6 rounded-lg transition duration-300 
              hover:bg-orange-600 hover:shadow-xl hover:scale-105 
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
              active:scale-95 active:ring-0 hover:shadow-orange-700/50"
        >
          <h4 className="font-bold font-serif">Customer Satisfaction</h4>
          <p>
            We are dedicated to providing exceptional service and creating
            lasting relationships with our customers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
