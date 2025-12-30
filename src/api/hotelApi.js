export const fetchHotelsApi = async (countryCode) => {
  const response = await fetch(
    `https://api.example.com/hotels?country=${countryCode}`
  );

  const data = await response.json();

  // 🔒 Limit to 50
  return data.slice(0, 50);
};
