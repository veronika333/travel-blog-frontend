import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNav from "./MainNav/MainNav";
import Home from "./Home/Home";
import About from "./About/About";
const App = () => {
  return (
    <div>
      <Router>
        <MainNav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
