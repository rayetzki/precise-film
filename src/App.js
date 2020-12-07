import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { AutomaticParameters, ManualParameters } from "./get-parameters";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <AutomaticParameters />
        </Route>
        <Route path="/manual">
          <ManualParameters />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
