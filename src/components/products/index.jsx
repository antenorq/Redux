import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

//Booststrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = () => {
  return (
    <>
      <Container>
        <Row>
          {products.map((product, index) => (
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
