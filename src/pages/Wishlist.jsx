import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (wishlist.length === 0) {
    return (
      <div className="pt-20 text-center">
        No hotels in wishlist
      </div>
    );
  }

  return (
    <div className="pt-20 max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlist.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow rounded p-4"
          >
            <h3 className="font-bold">{hotel.name}</h3>
            <p>{hotel.city}</p>
            <button
              onClick={() =>
                dispatch(removeFromWishlist(hotel.id))
              }
              className="mt-4 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
