import { Fragment, useEffect, useState } from "react";
import conditionsData from "../../../data/by-conditions";

function SelectISO({ isoList }) {
  const [iso, setIso] = useState(null);

  return (
    <Fragment>
      {iso && <p>ISO: {iso}</p>}
      {isoList && (
        <select
          onChange={(e) => setIso(e.target.value)}
          placeholder="Задай ISO"
          name="iso"
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
  const [isoList, setExistingISOs] = useState([]);

  useEffect(() => {
    const isoSet = new Set();
    conditionsData.forEach((values) =>
      values.Настройки.map((value) => isoSet.add(value.ISO))
    );
    setExistingISOs([...isoSet.values()]);
  }, []);

  return (
    <Fragment>
      <h1>Вручную</h1>
      <SelectISO isoList={isoList} />
    </Fragment>
  );
};
