import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import backgroundImage from "../../public/images/j1.jpg";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 bg-none"
        />
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-none bg-opacity-15 relative z-10">
          <div className="w-full max-w-md p-8 rounded shadow-lg bg-transparent">
            <h1 className="text-5xl font-bold font-serif italic mb-10 text-center text-white underline">
              Registration
            </h1>
            <form>
              {['username', 'email', 'password', 'confirm-password'].map((field, index) => (
                <div className="mb-4" key={index}>
                  <label
                    htmlFor={field}
                    className="block text-md font-medium mb-2 text-white font-bold font-serif"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1).replace('-', ' ')}
                  </label>
                  <input
                    type={field.includes('password') ? 'password' : 'text'}
                    id={field}
                    required
                    className="w-full border border-red-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent shadow-xl 
                      text-base placeholder:text-sm md:placeholder:text-lg
                      hover:scale-105 hover:shadow-red-700/50"
                    placeholder={`Enter your ${field.replace('-', ' ')}`}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-orange-400 text-white outline outline-2 outline-offset-2 px-4 py-2 mt-5 rounded-lg transition duration-300 
                hover:bg-red-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-red-700/50"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

