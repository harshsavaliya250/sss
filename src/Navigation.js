import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  let usercheck = localStorage.getItem("userId");
  const logout=()=>{
    localStorage.removeItem('userId');
  } 
  return (
    <>
      <div className="sticky-top main_navigation">
        <Container className="py-2">
          <div className="row ">
            <div className="col-10">
              <Navbar expand="lg navbar-white">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0 line align-items-center"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/">
                          Home
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/collection">
                          Collection
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/shop">
                          Shop
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/biomedical">
                          Biomedical
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/equipment">
                          Equipment
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/meditools">
                          Medic Tools
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="/" className="px-0 text-start nav-text">
                      <li>
                        <a className="me-4" href="/pages">
                          Pages
                        </a>
                      </li>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="d-flex col-2 justify-content-end align-items-center">
              <Nav.Link href="/" className="px-0  nav-text">
                <li className="menubar">
                  <Link to='' className="mx-3 admin">
                    <FaUserAlt />
                  </Link>
                  <ul className="sub_menu-1">
                  
                    
                    {usercheck!==null?<li>
                      <Link to='/' onClick={logout}>Log Out</Link>
                    </li>:<><li>
                      <Link to='/login'>Log In</Link>
                    </li>
                    <li>
                      <Link to='/register'>Sign up</Link>
                    </li></>}
                  </ul>
                </li>
              </Nav.Link>
              <Nav.Link href="/" className="px-0  nav-text">
                <li>
                  <Link  to='/addtocart' className="mx-3">
                    <FaShoppingCart />
                  </Link>
                </li>
              </Nav.Link>
              <Nav.Link href="/" className="px-0 nav-text">
                <li>
                  <Link to='/' className="ms-3 text-end">
                    <FaSearch />
                  </Link>
                </li>
              </Nav.Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navigation;
