import React from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

class DepForm extends React.Component {
  state = { name: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/departments", { ...this.state })
      .then(res => this.props.history.push(`/departments/${res.data.id}`));
  };

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Create New Department</h2>
        <hr />
        <br />
        <Form.Input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    );
  }
}

export default DepForm;
