import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ---------- HOTEL IMAGES ---------- */
const hotelImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
];

/* ---------- MOCK HOTEL DATA (10 HOTELS) ---------- */
const mockHotels = hotelImages.map((img, i) => ({
  id: i + 1,
  name: `Luxury Hotel ${i + 1}`,
  description:
    i % 2 === 0
      ? "A premium seaside hotel with stunning views and world-class service."
      : "A peaceful mountain retreat surrounded by nature and fresh air.",
  city: i % 2 === 0 ? "Goa" : "Manali",
  country: "India",
  location:
    i % 2 === 0 ? "Goa, India" : "Manali, Himachal Pradesh",
  price: 3000 + i * 700,
  rating: (4 + Math.random()).toFixed(1),
  reviewCount: 120 + i * 15,
  image: img,
  amenities: [
    "Free WiFi",
    "Swimming Pool",
    "Spa",
    "Restaurant",
    "Parking",
  ],
  roomTypes: ["Deluxe Room", "Suite", "Executive Room"],
}));

/* ---------- ASYNC THUNK ---------- */
export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockHotels), 800);
    });
  }
);

/* ---------- SLICE ---------- */
const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchHotels.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load hotels";
      });
  },
});

export default hotelsSlice.reducer;
