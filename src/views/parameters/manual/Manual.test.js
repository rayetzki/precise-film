import { render } from "@testing-library/react";
import { Manual } from "./Manual";

it("Renders manual component", async () => {
  const { getByText } = render(<Manual />);
  expect(getByText("Вручную")).toBeInTheDocument();
});
