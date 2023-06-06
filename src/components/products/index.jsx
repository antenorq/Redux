import { useState } from "react";

// Components
import ProductItem from "../product-item/index";

//Booststrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = ({ products }) => {
  const [searchterm, setSearchTerm] = useState("");

  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Form className="d-flex mb-3">
              <Form.Control
                type="search"
                placeholder="Search"
                autoFocus
                style={{ backgroundColor: "#C6E2FF" }}
                value={searchterm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </Form>
          </Col>
        </Row>

        <Row>
          {products
            .filter((product) => product.name.includes(searchterm))
            .map((product, index) => (
              <Col key={index} align="center" sm={12} md={6} lg={3}>
                <ProductItem product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
