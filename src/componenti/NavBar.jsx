import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Container,Nav,Navbar} from "react-bootstrap";

// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#221f1f"}}>
      <Container className="m-0">
        <img src={require("../assets/logo.png")} alt="logo-netflix" style={{width:"100px" ,height:"55px"}} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=" width-100 d-flex align-items-center justify-content-between">
          <Nav >
          <li className="nav-item active">
              <a className="nav-link font-weight-bold text-secondary" href="alt">Home</a>
            </li>
          <li className="nav-item active">
              <a className="nav-link font-weight-bold text-secondary" href="alt">TV Shows</a>
            </li>
          <li className="nav-item active">
              <a className="nav-link font-weight-bold text-secondary" href="alt">Movies</a>
            </li>
          <li className="nav-item active">
              <a className="nav-link font-weight-bold text-secondary" href="alt">Recently Added</a>
            </li>
          <li className="nav-item active">
              <a className="nav-link font-weight-bold text-secondary" href="alt">My List</a>
            </li>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* <div className="d-flex  align-items-center" >
            <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
          </div> */}
      </Container>
    </Navbar>
  );
};
export default NavBar;
