import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Automatic = () => {
  return (
    <Fragment>
      <Link to="/manual">Вручную</Link>
    </Fragment>
  );
};
