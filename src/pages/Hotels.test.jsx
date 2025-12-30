import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Hotels from "./Hotels";
import { BrowserRouter } from "react-router-dom";

test("renders Hotels page heading", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Hotels />
      </BrowserRouter>
    </Provider>
  );

  const heading = screen.getByText(/Hotels/i);
  expect(heading).toBeInTheDocument();
});
