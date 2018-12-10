import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Link to={"/"}>
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </Link>
        <Link to={"/about"}>
          <Menu.Item
            name="About"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
        </Link>

        <Link to={""}>
          <Menu.Item
            name="Department"
            active={activeItem === "department"}
            onClick={this.handleItemClick}
          >
            Departments
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}
