import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/search"]} component={Search} />
          <Route exact path="/saved" component={Saved} />
          <route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
