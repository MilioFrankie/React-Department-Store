import React from "react";
import { Link } from "react-router-dom";
import { Header, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import DepList from "./DepList";

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments").then(res => {
      this.setState({ departments: res.data });
    });
  }

  render() {
    return (
      <div>
        <Header as="h1" style={styles.header}>
          Departments
        </Header>
        <Link to="/departments/new">
          <Button icon color="green">
            <Icon name="add" />
            Add Department
          </Button>
        </Link>
        <hr />
        <br />
        <br />
        <DepList deps={this.state.departments} />
      </div>
    );
  }
}

const styles = {
  header: {
    color: "#1ed2f4",
    fontWeight: "bold"
  }
};

export default Departments;
