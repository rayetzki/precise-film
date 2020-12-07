import { render } from "@testing-library/react";
import { ManualParameters } from "../manual";

it("Renders manual component", async () => {
  const { getByText } = render(<ManualParameters />);
  expect(getByText("Вручную")).toBeInTheDocument();
});
