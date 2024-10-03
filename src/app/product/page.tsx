import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import j6 from "../../public/images/j6.jpg";
import j7 from "../../public/images/j7.jpg";
import j8 from "../../public/images/j8.jpg";
import j9 from "../../public/images/j9.jpg";
import j27 from "../../public/images/j27.jpg";
import j11 from "../../public/images/j11.jpg";
import j18 from "../../public/images/j18.jpg";
import j19 from "../../public/images/j19.jpg";
import j14 from "../../public/images/j14.jpg";
import j15 from "../../public/images/j15.jpg";
import j16 from "../../public/images/j16.jpg";
import j17 from "../../public/images/j17.jpg";

const products = [
  { id: 1, title: "Product 1", description: "This exquisite piece will add a touch of elegance to any outfit.", price: "$29.99", image: j6 },
  { id: 2, title: "Product 2", description: "You’ll love how this stunning design catches the light beautifully.", price: "$39.99", image: j7 },
  { id: 3, title: "Product 3", description: "Elevate your style effortlessly with this chic and versatile accessory.", price: "$49.99", image: j8 },
  { id: 4, title: "Product 4", description: "Capture attention and showcase your style with this eye-catching creation.", price: "$59.99", image: j9 },
  { id: 5, title: "Product 5", description: "Make a statement with this timeless treasure that radiates charm.", price: "$59.99", image: j27 },
  { id: 6, title: "Product 6", description: "Express your unique personality with this beautifully crafted item.", price: "$59.99", image: j11 },
  { id: 7, title: "Product 7", description: "This one-of-a-kind creation is the perfect gift for someone special.", price: "$59.99", image: j18 },
  { id: 8, title: "Product 8", description: "Add a hint of nostalgia to your collection with this captivating design.", price: "$59.99", image: j19 },
  { id: 9, title: "Product 9", description: "Turn heads and spark conversations with this bold statement piece.", price: "$59.99", image: j14 },
  { id: 10, title: "Product 10", description: "Embrace effortless beauty with this delicate accessory that’s perfect for any occasion.", price: "$59.99", image: j15 },
  { id: 10, title: "Product 11", description: "This delightful piece is a must-have for anyone who loves to stand out.", price: "$59.99", image: j16 },
  { id: 10, title: "Product 12", description: "Infuse your wardrobe with a splash of personality through this unique design.", price: "$59.99", image: j17 },
];

const ProductsPage = () => {
  return (
    <div className="bg-none">
      <Header />

      <div className="flex flex-wrap justify-center items-start min-h-screen bg-gradient-to-r from-slate-500 to-slate-950 p-6 gap-6">
        {products.map((product) => (
          <div key={product.id} className=" h-auto w-64 bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={250} // Use a fixed width
              height={250} // Use a fixed height
              className="m-auto object-cover h-64 w-full transition-transform duration-300 hover:scale-110"
            />
            <div className="bg-orange-400 mt-2 text-black p-4 rounded-lg">
              <h1 className="text-xl font-bold font-serif">{product.title}</h1>
              <p className="text-amerald-600 font-serif">{product.description}</p>
              <p className="text-xl font-semibold font-serif">{product.price}</p>
              <button className="w-full bg-orange-400 text-black outline outline-2 outline-offset-2 px-4 py-2 mt-2 rounded-lg transition duration-300 hover:bg-red-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:scale-95 active:ring-0 hover:shadow-red-700/50">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;

