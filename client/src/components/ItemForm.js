import React from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

class ItemForm extends React.Component {
  state = { name: "", description: "", price: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { id } = this.props.match.params;
    const { push } = this.props.history;

    axios
      .post(`/api/departments/${id}/items`, { ...this.state })
      .then(res => push(`/departments/${id}`));
  };

  render() {
    const { name, description, price } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1 style={styles.header}>Create New Item</h1>
        <hr />
        <br />
        <Form.Group widths="equal">
          <Form.Input
            name="name"
            placeholder="Name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            name="description"
            placeholder="Item description"
            value={description}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            name="price"
            placeholder="Item Price"
            value={price}
            required
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color="green" floated="right">
          Submit
        </Form.Button>
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

export default ItemForm;
