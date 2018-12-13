import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Dep from "./components/Dep";
import Departments from "./components/Departments";
import DepForm from "./components/DepForm";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/departments" component={Departments} />
            <Route exact path="/departments/new" component={DepForm} />
            <Route
              exact
              path="/departments/:id/edit"
              render={props => <DepForm edit {...props} />}
            />
            <Route exact path="/departments/:id" component={Dep} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom, #2b2b3a, #1ed2f4);
  height: 175vh;
`;

export default App;
