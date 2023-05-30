import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/user/slice";
import { OPEN_CART } from "../../redux/cart/slice";
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
import LoginModal from "../LoginModal";

function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { cartIsVisible } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );
  const { productsTotalCount } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  const handleCartClick = () => {
    dispatch(OPEN_CART(true));
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
                  <Nav.Link onClick={handleShow}>Login</Nav.Link>
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
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Cart handleShow={handleShow} isVisible={cartIsVisible} />
      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
}

export default Header;
