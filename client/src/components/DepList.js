import React from "react";
import Dep from "./Dep";

const DepList = ({ deps }) => (
  <div>
    {deps.map(d => (
      <Dep key={d.id} {...d} />
    ))}
  </div>
);

export default DepList;
