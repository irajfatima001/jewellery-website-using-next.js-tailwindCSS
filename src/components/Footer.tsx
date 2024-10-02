

export default function Footer(){
    return(
        
        <footer className="bg-stone-900 text-white text-center p-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="text-xl font-bold font-serif">Stay Connected</h2>
            <p className="text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="mt-4">
              <input type="email" placeholder="Your Email" className="p-2 rounded-l-lg text-gray-800" />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg transition duration-300 
                hover:bg-red-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-amerald-400 focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-red-700/50">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-red-400">Facebook</a>
            <a href="#" className="text-white hover:text-red-400">Instagram</a>
            <a href="#" className="text-white hover:text-red-400">Twitter</a>
          </div>
          <p className="text-sm">&copy; 2024 Jewellery Store. All rights reserved.</p>
        </div>
      </footer>


    )
}