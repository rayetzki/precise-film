import { useState } from "react";

export function useCurrentParameters() {
  const initialParameters = {
    iso: "",
    aperture: "",
    exposure: "",
  };

  if (!localStorage.getItem("parameters")) {
    localStorage.setItem("parameters", JSON.stringify(initialParameters));
  }

  const [parameters, setParameters] = useState(
    localStorage.getItem("parameters")
      ? JSON.parse(localStorage.getItem("parameters"))
      : initialParameters
  );

  const saveParameters = (newParameters) => {
    const freshParameters = { ...parameters, ...newParameters };
    setParameters(freshParameters);
    localStorage.setItem("parameters", JSON.stringify(freshParameters));
  };

  return {
    parameters,
    saveParameters,
  };
}
