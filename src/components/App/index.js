import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "../Home";
import Loading from "../Loading";
import LoginPage from "../Login";

/*
Code split to improve load times -
creates three chunks:
DynamicPage, NoMatch and and main app

This means that upon the app launching, only the main app chunk will load. When we click
'DynamicPage', the chunk corresponding loads asynchronously. The chunk corresponding
to 'NoMatch' was never loaded - thus, saving bandwidth.
*/

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName: 'DynamicPage' */ "../DynamicPage"),
  {
    LoadingComponent: Loading
  }
);

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName: 'NoMatch' */ "../NoMatch"),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
