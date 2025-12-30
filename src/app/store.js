import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "../features/hotels/hotelsSlice";
import blogsReducer from "../features/blogs/blogSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    blogs: blogsReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
