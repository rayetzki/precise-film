import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";

export const Automatic = () => {
  const { weather, error } = useCurrentWeather();
  return (
    <Fragment>
      {!weather && !error && <p>Loading...</p>}
      <Link to="/manual">Вручную</Link>
    </Fragment>
  );
};
