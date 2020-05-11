import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainNav from "./pages/MainNav/MainNav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        <MainNav />
        <main>
          <Switch>
            {/* <Route path="/experience/:postId" component={SinglePage} /> */}
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
