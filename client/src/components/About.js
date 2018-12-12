import React from "react";
import { Container } from "semantic-ui-react";

const About = () => (
  <Container>
    <h1 style={styles.header}>About</h1>
    <hr />
    <br />
    <br />
    <p style={styles.fontColor}>
      A department store is a retail establishment offering a wide range of
      consumer goods in different product categories known as "departments". In
      modern major cities, the department store made a dramatic appearance in
      the middle of the 19th century, and permanently reshaped shopping habits,
      and the definition of service and luxury. Similar developments were under
      way in London (with Whiteleys), in Paris (Le Bon Marché in 1852) and in
      New York (with Stewart's).[1]
    </p>
    <br />
    <p style={styles.fontColor}>
      Today, departments often include the following: clothing, furniture, home
      appliances, toys, cosmetics, houseware, gardening, toiletries, sporting
      goods, do it yourself, paint, and hardware. Additionally, other lines of
      products such as food, books, jewelry, electronics, stationery,
      photographic equipment, baby products, and products for pets are sometimes
      included. Customers generally check out near the front of the store,
      although some stores include sales counters within each department. Some
      stores are one of many within a larger retail chain, while others are
      independent retailers. In the 1970s, they came under heavy pressure from
      discounters, and have come under even heavier pressure from e-commerce
      sites such as Amazon since 2010. Big-box stores, hypermarkets, and
      discount stores are comparable to historical department stores.
    </p>
  </Container>
);

const styles = {
  header: {
    color: "#1ed2f4",
    fontWeight: "bold"
  },
  fontColor: {
    color: "white",
    fontWeight: "bold"
  }
};

export default About;
