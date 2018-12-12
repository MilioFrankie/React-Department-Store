import React from "react";
import { Container } from "semantic-ui-react";

const Home = () => (
  <Container>
    <h1 style={styles.header}>Home</h1>
  </Container>
);

const styles = {
  header: {
    color: "#1ed2f4",
    fontWeight: "bold"
  }
};

export default Home;
