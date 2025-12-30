import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart, FaPlane } from "react-icons/fa";

const Header = () => {
  const wishlistCount = useSelector(
    (state) => state.wishlist.items.length
  );

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO + PLANE */}
        <div className="flex items-center gap-2 relative overflow-hidden">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            WanderStay
          </Link>

          {/* Flying Plane */}
          <FaPlane className="text-blue-500 text-lg animate-plane" />
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/hotels" className="hover:text-blue-600 transition">
            Hotels
          </Link>
          <Link to="/blogs" className="hover:text-blue-600 transition">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          {/* WISHLIST */}
          <Link to="/wishlist" className="relative">
            <FaHeart className="text-xl text-red-500 hover:scale-110 transition" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
