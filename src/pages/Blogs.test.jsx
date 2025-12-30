import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Blogs from "./Blogs";
import blogReducer from "../features/blogs/blogSlice";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

test("renders Blogs loading state", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Blogs />
      </BrowserRouter>
    </Provider>
  );

  const loadingText = screen.getByText(/Loading blogs/i);
  expect(loadingText).toBeInTheDocument();
});
