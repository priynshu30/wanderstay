import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">WanderStay</h2>
          <p className="text-gray-300">
            Your ultimate travel companion. Discover hotels, plan trips,
            and make every journey memorable with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:text-white">Hotels</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">Blogs</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-white">Wishlist</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Newsletter</h2>
          <p className="text-gray-300 mb-2">Subscribe for latest travel updates</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-gray-900 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 text-gray-300">
            <p>Email: info@wanderstay.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-700 text-gray-400">
        &copy; {new Date().getFullYear()} WanderStay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
