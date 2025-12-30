import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ MOCK BLOG DATA (DIFFERENT IMAGE + CONTENT)
const mockBlogs = [
  {
    id: 1,
    title: "Peaceful Beach Escapes",
    content:
      "Relax on golden beaches, enjoy ocean breezes, and experience breathtaking sunsets by the sea.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "Mountain Adventures",
    content:
      "Explore scenic mountains, hiking trails, and fresh air in nature’s lap.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 3,
    title: "City Travel Diaries",
    content:
      "Discover vibrant cities, street food, culture, and unforgettable nightlife experiences.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    id: 4,
    title: "Desert Safari Experience",
    content:
      "Enjoy thrilling desert safaris, camel rides, and magical nights under the stars.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 5,
    title: "Forest & Nature Retreats",
    content:
      "Reconnect with nature through forest stays, waterfalls, and peaceful surroundings.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
  {
    id: 6,
    title: "Island Getaways",
    content:
      "Escape to tropical islands with crystal clear waters and luxury resorts.",
    image:
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
  },
];

// ✅ Mock async API
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBlogs), 1000);
  });
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load blogs";
      });
  },
});

export default blogSlice.reducer;
