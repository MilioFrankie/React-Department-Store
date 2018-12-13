import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Icon, Button, Header } from "semantic-ui-react";

class Dep extends React.Component {
  state = { dep: {}, items: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/departments/${id}`)
      .then(res => this.setState({ dep: res.data }));
    axios.get(`/api/departments/${id}/items`).then(res => {
      this.setState({ items: res.data });
    });
  }

  handleDelete = id => {
    const remove = window.confirm(
      "Are you sure you want to delete this department?"
    );
    if (remove)
      axios
        .delete(`/api/departments/${id}`)
        .then(res => this.props.history.push("/departments"));
  };

  renderItems = () => {
    return this.state.items.map(i => (
      <Card raised style={styles.cardColor}>
        <Card.Content>
          <Card.Header textAlign="center" as="h2">
            {i.name}
          </Card.Header>
          <Card.Meta>
            <Icon name="dollar sign" color="green" />
            {i.price}
          </Card.Meta>
          <Card.Description>{i.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group attached="bottom">
            <Button>Edit</Button>
            <Button.Or text="or" color="grey" />
            <Button color="red">Delete</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    const { name, id } = this.state.dep;
    return (
      <div>
        <div style={styles.flex}>
          <Header as="h1" style={styles.header}>
            {name}
          </Header>
          <div>
            <Link to={`/departments/${id}/edit`}>
              <Button color="grey">Edit</Button>
            </Link>
            <Button color="red" onClick={() => this.handleDelete(id)}>
              Delete
            </Button>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <Card.Group itemsPerRow="2">{this.renderItems()}</Card.Group>
      </div>
    );
  }
}

const styles = {
  header: {
    color: "#1ed2f4",
    fontWeight: "bold"
  },
  cardColor: {
    background: "#f4f5f6"
  },
  textColor: {
    color: "white"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  }
};

export default Dep;
