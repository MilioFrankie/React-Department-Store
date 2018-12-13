import React from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

class DepForm extends React.Component {
  state = { name: "" };

  componentDidMount() {
    if (this.props.edit)
      axios
        .get(`/api/departments/${this.props.match.params.id}`)
        .then(res => this.setState({ ...res.data }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.edit) {
      axios
        .put(`/api/departments/${this.props.match.params.id}`, {
          ...this.state
        })
        .then(res => this.props.history.push(`/departments/${res.data.id}`));
    } else {
      axios
        .post("/api/departments", { ...this.state })
        .then(res => this.props.history.push(`/departments/${res.data.id}`));
    }
  };

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2 style={styles.header}>
          {this.props.edit ? "Edit Department" : "Create New Department"}
        </h2>
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

const styles = {
  header: {
    color: "#1ed2f4",
    fontWeight: "bold"
  }
};

export default DepForm;
