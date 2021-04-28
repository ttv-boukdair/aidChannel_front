import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Default from "./pages/public/Default";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <p>admin</p>
        </Route>
        <Route path="/">
          <Default></Default>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
