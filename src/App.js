import React from "react";
import "./App.css";
import LandingPage from "./webpages/LandingPage/LandingPage";
import MainNav from "./components/MainNav/MainNav";
import NewPost from './components/NewPost/NewPost';
import SinglePage from './webpages/SinglePage/SinglePage'


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
            <Route path="/post-experience" component={NewPost} />
            <Route path="/:postId" component={SinglePage}></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
