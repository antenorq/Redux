import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/user/slice";
// OLD WITHOUT TOOLKIT import { login, logout } from "../../redux/user/actions";

//Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// Components
import Cart from "../cart/index";

// Styles
//import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { productsTotalCount } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(login({ name: "antenor", email: "antenor@gmail.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const expand = "md";

  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        bg="dark"
        variant="dark"
        className="mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">Redux Shopping</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {currentUser ? (
                  <Nav.Link onClick={handleLogoutClick}>
                    Sair ({currentUser.name})
                  </Nav.Link>
                ) : (
                  <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
                )}
                <Nav.Link onClick={handleCartClick}>
                  Cart ({productsTotalCount})
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
                <Cart
                  isVisible={cartIsVisible}
                  setIsVisible={setCartIsVisible}
                />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );

  /*
  return (
    <Styles.Container>
      <Styles.Logo>
        <a href="/">Redux Shopping</a>
      </Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair ({currentUser.name})</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div onClick={handleCartClick}>Cart ({productsTotalCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
  */
}

export default Header;
