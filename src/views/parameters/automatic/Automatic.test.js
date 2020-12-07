import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Automatic } from "./Automatic";

it("Renders automatic component", () => {
  const { getByText } = render(<Automatic />, {
    wrapper: MemoryRouter,
  });

  expect(getByText("Вручную")).toBeInTheDocument();
});
