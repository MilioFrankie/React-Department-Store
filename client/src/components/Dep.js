import React from "react";
import axios from "axios";
import { Card, Icon, Button } from "semantic-ui-react";

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

  renderItems = () => {
    return this.state.items.map(i => (
      <Card raised>
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
    return (
      <div>
        <h1 style={styles.header}>{this.state.dep.name}</h1>
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
  }
};

export default Dep;
