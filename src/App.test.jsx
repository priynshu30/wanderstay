// src/App.test.jsx
import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

describe("App component", () => {
  it("renders Hotels navigation link", () => {
    // Dummy reducers to match the slices used in your app
    const store = configureStore({
      reducer: {
        wishlist: (state = { items: [] }) => state, // dummy wishlist slice
        blogs: (state = { list: [], loading: false }) => state, // dummy blogs slice
        // add other slices here if your app uses them
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Scope query to the header to avoid multiple "Hotels" links
    const header = screen.getByRole("banner"); // <header> element
    const hotelsLink = within(header).getByRole("link", { name: "Hotels" });

    expect(hotelsLink).toBeInTheDocument();
  });
});
