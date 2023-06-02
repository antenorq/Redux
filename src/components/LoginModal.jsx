import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//Redux
import { login } from "../redux/user/slice";
import { useSelector, useDispatch } from "react-redux";

function LoginModal({ show, handleClose }) {
  //const [show, setShow] = useState(false);  SET STATE OPEN MODAL IS ON HEADER COMPONENTE
  //const handleShow = () => setShow(true);   FUNCTION OPEN MODAL IS ON HEADER COMPONENTE
  //const handleClose = () => setShow(false); FUNCTION CLOSE MODAL IS ON HEADER COMPONENTE

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(login({ name: "Demo", email: "demo@demo.com" }));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {currentUser ? (
        <div className="m-5">
          <div>
            <b>YOU ARE LOGGED IN - {currentUser.name}</b>
          </div>
          <br />
          <div>
            This is a Test React App using Redux-Toolkit.
            <br />
            The checkout button will not work as checkout.
          </div>
        </div>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>
              LOGIN TEST -{" "}
              <span style={{ fontSize: "15px" }}>
                (demo@demo.com - pw=123456)
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="demo@demp.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="123456" />
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
        </>
      )}
    </Modal>
  );
}

export default LoginModal;
