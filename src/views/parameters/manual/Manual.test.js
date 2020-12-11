import { fireEvent, render, screen } from "@testing-library/react";
import { Manual } from "./Manual";

it("Renders manual component", async () => {
  const { getByText } = render(<Manual />);
  expect(getByText("Вручную")).toBeInTheDocument();
});

it("Selects the iso", () => {
  const { getByPlaceholderText } = render(<Manual />);
  const select = getByPlaceholderText("Задай ISO");
  fireEvent.change(select, { target: { value: "200" } });
  expect(screen.getByText("ISO: 200")).toBeInTheDocument();
});
