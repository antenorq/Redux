import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//Redux
import { login } from "../redux/user/slice";
import { useDispatch } from "react-redux";

function LoginModal({ show, handleClose }) {
  //const [show, setShow] = useState(false);  SET STATE OPEN ON HEADER BUTTOM LOGIN
  //const handleShow = () => setShow(true);   SET STATE OPEN ON HEADER BUTTOM LOGIN
  //const handleClose = () => setShow(false); SET STATE CLOSE ON HEADER COMPONENTE

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(login({ name: "User test", email: "test@gmail.com" }));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginClick}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
