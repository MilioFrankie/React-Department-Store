import React from "react";
import { Link } from "react-router-dom";
// import { Item } from "/Item";

const Dep = ({ id, name }) => (
  <div>
    <Link to={`./departments/${id}`}>
      <h3 style={{ marginBottom: "15px" }}>{name}</h3>
      {/* <Item depId={id} /> */}
    </Link>
  </div>
);
export default Dep;
