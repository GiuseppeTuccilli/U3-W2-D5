import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary px-4 position-fixed z-1 w-100 "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link
                className={
                  "nav-link " + (location.pathname === "/" ? "active" : "")
                }
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  "nav-link " +
                  (location.pathname === "/Previsioni" ? "active" : "")
                }
                to={"/Previsioni"}
              >
                Previsioni
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className={
                  "nav-link " +
                  (location.pathname === "/Situazione" ? "active" : "")
                }
                to={"/Situazione"}
              >
                Situazione
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cerca città..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Cerca
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
