import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Departments from "./components/Departments";
import { Container } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/departments" component={Departments} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
