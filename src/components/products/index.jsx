import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
//import * as Styles from "./styles";

//Booststrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = () => {
  return (
    <>
      {/* <Styles.Container>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </Styles.Container> */}

      <Container fluid>
        <Row>
          {products.map((product, index) => (
            <Col
              align="center"
              sm={12}
              md={6}
              lg={3}
              style={{ border: "solid 1px #000" }}
            >
              <ProductItem key={index} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
