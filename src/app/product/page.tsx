// import Image from "next/image";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import j6 from "../../public/images/j6.jpg";
// import j7 from "../../public/images/j7.jpg";
// import j8 from "../../public/images/j8.jpg";
// import j9 from "../../public/images/j9.jpg";
// import j10 from "../../public/images/j10.jpg";
// import j11 from "../../public/images/j11.jpg";
// import j12 from "../../public/images/j12.jpg";
// import j13 from "../../public/images/j13.jpg";
// import j14 from "../../public/images/j14.jpg";
// import j15 from "../../public/images/j15.jpg";

// const products = [
//   {
//     id: 1,
//     title: "Product 1",
//     description: "This is a great product.",
//     price: "$29.99",
//     image: j6,
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     description: "This is another great product.",
//     price: "$39.99",
//     image: j7,
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     description: "This product is awesome.",
//     price: "$49.99",
//     image: j8,
//   },
//   {
//     id: 4,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j9,
//   },
//   {
//     id: 5,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j10,
//   },
//   {
//     id: 6,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j11,
//   },
//   {
//     id: 7,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j12,
//   },
//   {
//     id: 8,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j13,
//   },
//   {
//     id: 9,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j14,
//   },
//   {
//     id: 10,
//     title: "Product 4",
//     description: "You will love this product.",
//     price: "$59.99",
//     image: j15,
//   },
// ];

// const ProductsPage = () => {
//   return (
//     <div className="bg-slate-900 ">
//       <Header />

//       <div className=" flex-wrap justify-between items-center min-h-screen bg-slate-900 p-6 grid gap-6  grid-cols-3 ">
//         {products.map((product) => (
          
//             <div
//               key={product.id}
//               className="  mx-auto m-4 h-48 w-64 bg-white shadow-lg rounded-lg overflow-hidden justify-between "
//             >
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 width={500}
//                 height={300}
//                 className="relative  m-auto h-48 w-35 hover:scale-110 duration-1000 object-cover"
                
//               />
//               <div
//                 className=" bg-orange-400  mt-2 text-white hover:text-black p-4 rounded-lg transition duration-300 
//                 hover:bg-orange-600 hover:shadow-xl hover:scale-105 
//                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
//                 active:scale-95 active:ring-0 
//                 hover:shadow-orange-700/50"
//               >
//                 <h1 className="text-xl mt-2 hover:text-yellow-600 border font-bold font-serif">
//                   {product.title}
//                 </h1>
//                 <p className=" text-gray-600 font-serif">
//                   {product.description}
//                 </p>
//                 <p className=" text-xl font-semibold font-serif">
//                   {product.price}
//                 </p>
//                 <button
//                   className="w-full bg-orange-400 text-white outline outline-2 outline-offset-2 px-4 py-2 mt-2 rounded-lg transition duration-300 
//                 hover:bg-red-600 hover:shadow-xl hover:scale-105 
//                 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
//                 active:scale-95 active:ring-0 
//                 hover:shadow-red-700/50"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
          
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductsPage;
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import j6 from "../../public/images/j6.jpg";
import j7 from "../../public/images/j7.jpg";
import j8 from "../../public/images/j8.jpg";
import j9 from "../../public/images/j9.jpg";
import j10 from "../../public/images/j10.jpg";
import j11 from "../../public/images/j11.jpg";
import j12 from "../../public/images/j12.jpg";
import j13 from "../../public/images/j13.jpg";
import j14 from "../../public/images/j14.jpg";
import j15 from "../../public/images/j15.jpg";
import j16 from "../../public/images/j16.jpg";
import j17 from "../../public/images/j17.jpg";

const products = [
  { id: 1, title: "Product 1", description: "This is a great product.", price: "$29.99", image: j6 },
  { id: 2, title: "Product 2", description: "This is another great product.", price: "$39.99", image: j7 },
  { id: 3, title: "Product 3", description: "This product is awesome.", price: "$49.99", image: j8 },
  { id: 4, title: "Product 4", description: "You will love this product.", price: "$59.99", image: j9 },
  { id: 5, title: "Product 5", description: "You will love this product.", price: "$59.99", image: j10 },
  { id: 6, title: "Product 6", description: "You will love this product.", price: "$59.99", image: j11 },
  { id: 7, title: "Product 7", description: "You will love this product.", price: "$59.99", image: j12 },
  { id: 8, title: "Product 8", description: "You will love this product.", price: "$59.99", image: j13 },
  { id: 9, title: "Product 9", description: "You will love this product.", price: "$59.99", image: j14 },
  { id: 10, title: "Product 10", description: "You will love this product.", price: "$59.99", image: j15 },
  { id: 10, title: "Product 10", description: "You will love this product.", price: "$59.99", image: j16 },
  { id: 10, title: "Product 10", description: "You will love this product.", price: "$59.99", image: j17 },
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

