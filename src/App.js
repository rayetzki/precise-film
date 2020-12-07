import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { AutomaticParameters, ManualParameters } from "./get-parameters";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AutomaticParameters />
        </Route>
        <Route path="/manual">
          <ManualParameters />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
