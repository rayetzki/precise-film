import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Automatic, Manual } from "../views";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Automatic />
        </Route>
        <Route path="/manual">
          <Manual />
        </Route>
      </Switch>
    </Router>
  );
}
