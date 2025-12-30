import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../features/wishlist/wishlistSlice";

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.wishlist.items);
  const isFav = wishlist.some((h) => h.id === hotel.id);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-48 w-full object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{hotel.name}</h3>
        <p className="text-sm text-gray-500">{hotel.city}</p>
        <p className="text-sm mt-2">{hotel.description}</p>

        <div className="flex justify-between mt-4">
          <span className="font-bold">₹{hotel.price}</span>

          <button onClick={() =>
            isFav
              ? dispatch(removeFromWishlist(hotel.id))
              : dispatch(addToWishlist(hotel))
          }>
            <FaHeart className={isFav ? "text-red-500" : "text-gray-400"} />
          </button>
        </div>

        <Link
          to={`/hotels/${hotel.id}`}
          className="block mt-4 text-center bg-blue-600 text-white py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
