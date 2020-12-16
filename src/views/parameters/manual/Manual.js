import { useCurrentParameters } from "../../../hooks/useCurrentParameters";
import { Fragment, memo, useEffect, useState } from "react";
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
          onChange={(event) => {
            setISO(Number(event.target.value));
            saveParameters({
              [event.target.name]: Number(event.target.value),
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

export const Manual = memo(() => {
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
      {!isoList && <p>Loading...</p>}
      {isoList && (
        <SelectISO
          isoList={isoList}
          currentISO={Number(parameters.iso)}
          saveParameters={saveParameters}
        />
      )}
    </Fragment>
  );
});
