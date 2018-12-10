import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
