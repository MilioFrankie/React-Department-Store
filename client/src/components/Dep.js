import React from "react";
import axios from "axios";

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
      <div>
        <h3>{i.name}</h3>
        <p>{i.description}</p>
        <p>${i.price}</p>
        <hr />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h1 style={{ marginBottom: "15px" }}>{this.state.dep.name}</h1>
        <p>{this.renderItems()}</p>
      </div>
    );
  }
}

export default Dep;
