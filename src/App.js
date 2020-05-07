
import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SinglePage from './pages/SinglePage/SinglePage';
import MainNav from "./pages/MainNav/MainNav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Router>
        <MainNav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/single-page" component={SinglePage} />
            <Route path="/landing-page" component={LandingPage} />

          </Switch>
        </main>
      </Router>
    </div>
  );
}


export default App;
