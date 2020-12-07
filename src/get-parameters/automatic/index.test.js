import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AutomaticParameters } from "../automatic";

it("Renders automatic component", () => {
  const { getByText } = render(<AutomaticParameters />, {
    wrapper: MemoryRouter,
  });
  expect(getByText("Вручную")).toBeInTheDocument();
});
