import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../features/hotels/hotelsSlice";
import { countries } from "../data/countries";
import HotelCard from "../Components/hotel/HotelCard";

const Hotels = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.hotels);

  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 10;
  const totalPages = Math.ceil(list.length / perPage);
  const visibleHotels = list.slice(
    (page - 1) * perPage,
    page * perPage
  );

  useEffect(() => {
    if (country) {
      dispatch(fetchHotels(country));
      setPage(1);
    }
  }, [country, dispatch]);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      {/* Dropdown */}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border p-3 rounded mb-6"
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>

      {loading && <p>Loading hotels...</p>}

      {/* Hotel Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {visibleHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-8">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
