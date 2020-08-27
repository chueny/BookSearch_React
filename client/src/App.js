import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import Saved from "./components/Saved.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header/>
          <Switch>
            <Route path="/" exact component ={Search} />
            <Route path="/search"  component={Search} />
            <Route path="/saved"  component ={Saved} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
