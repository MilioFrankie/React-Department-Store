import React from "react";
import { Link } from "react-router-dom";
import { Item, List, Segment } from "semantic-ui-react";

const DepList = ({ deps }) => (
  <div>
    {deps.map(d => (
      <Segment inverted>
        <List divided inverted relaxed>
          <List.Item>
            <List.Header>
              <Link to={`departments/${d.id}`}>
                <h2>{d.name}</h2>
              </Link>
            </List.Header>
          </List.Item>
        </List>
      </Segment>
    ))}
  </div>
);

export default DepList;
