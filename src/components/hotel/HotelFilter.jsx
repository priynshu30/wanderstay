const HotelFilter = ({ onSelect }) => {
  return (
    <select
      className="border p-2 rounded w-full md:w-64"
      onChange={(e) => onSelect(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Select Country
      </option>
      <option value="IN">India</option>
      <option value="US">USA</option>
      <option value="FR">France</option>
      <option value="AE">UAE</option>
    </select>
  );
};

export default HotelFilter;
