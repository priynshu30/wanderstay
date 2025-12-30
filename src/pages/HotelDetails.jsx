import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = useSelector((s) =>
    s.hotels.list.find((h) => h.id === Number(id))
  );

  if (!hotel) return <p>Hotel not found</p>;

  return (
    <div className="pt-24 max-w-5xl mx-auto px-6">
      <img src={hotel.image} className="rounded-lg mb-6" />

      <h1 className="text-3xl font-bold">{hotel.name}</h1>
      <p>{hotel.description}</p>

      <h3 className="mt-6 font-bold">Amenities</h3>
      <ul className="list-disc ml-6">
        {hotel.amenities?.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDetails;
