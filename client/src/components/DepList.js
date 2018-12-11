import React from "react";
import Dep from "./Dep";
import { Link } from "react-router-dom";

const DepList = ({ deps }) => (
  <div>
    {deps.map(d => (
      <Link to={`departments/${d.id}`}>
        <h2>{d.name}</h2>
      </Link>
    ))}
  </div>
);

export default DepList;
