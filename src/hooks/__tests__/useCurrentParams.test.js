import { useCurrentParameters } from "../useCurrentParameters";
import { renderHook } from "@testing-library/react-hooks";

const initialValues = {
  iso: "",
  aperture: "",
  exposure: "",
};

afterAll(() => {
  localStorage.clear();
});
it("Renders a use current params hook", () => {
  const { result } = renderHook(useCurrentParameters);
  expect(result.current.parameters).toStrictEqual(initialValues);
  result.current.saveParameters({
    iso: 100,
  });
  expect(result.current.parameters).toStrictEqual({
    ...initialValues,
    iso: 100,
  });
});
