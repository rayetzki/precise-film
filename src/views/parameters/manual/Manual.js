import { useCurrentParameters } from "../../../hooks/useCurrentParameters";
import { Fragment, useEffect, useState } from "react";
import conditionsData from "../../../data/by-conditions";

function SelectISO({ isoList, currentISO, saveParameters }) {
  const [iso, setISO] = useState(currentISO);
  return (
    <Fragment>
      {iso && <p>ISO: {iso}</p>}
      {isoList && (
        <select
          name="iso"
          placeholder="Задай ISO"
          value={currentISO}
          onChange={(e) => {
            setISO(Number(e.target.value));
            saveParameters({
              [e.target.name]: Number(e.target.value),
            });
          }}
        >
          {isoList.map((iso) => (
            <option key={iso} value={iso} label={iso}>
              {iso}
            </option>
          ))}
        </select>
      )}
    </Fragment>
  );
}

export const Manual = () => {
  const { parameters, saveParameters } = useCurrentParameters();
  const [isoList, setExistingISOs] = useState([]);

  useEffect(() => {
    const isoSet = new Set();
    conditionsData.forEach((values) =>
      values.settings.map((value) => isoSet.add(value.ISO))
    );
    setExistingISOs([...isoSet.values()]);
  }, []);

  return (
    <Fragment>
      <h1>Вручную</h1>
      <SelectISO
        isoList={isoList}
        currentISO={Number(parameters.iso)}
        saveParameters={saveParameters}
      />
    </Fragment>
  );
};
