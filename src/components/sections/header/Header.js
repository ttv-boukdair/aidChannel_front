import React, { useState, useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Flag from "react-world-flags";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./header.css";
function Header(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => {};
  }, [props]);
  return (
    <header>
      {loading ? (
        <Skeleton variant="text" />
      ) : (
        <Navbar bg="white" expand="lg" className="mr-2 ml-2">
          <Navbar.Brand href="#home" className="">
            <div className="logoDev border  border-dark row mr-3">
              <div className="col-6 p-0 ">
                <Flag
                  code={"mar"}
                  style={{ height: "36px" }}
                  className=" p-0 m-0"
                />
              </div>
              <div className="col-6 p-0 pl-2 pr-3 ">
                <div style={{ fontSize: "12px" }}>
                  <h4 className="pb-0 mb-0">
                    <b className="pb-0 mb-0">AID</b>
                  </h4>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    marginTop: "-8px",
                    color: "#b0b3b6",
                  }}
                >
                  <small>
                    <b className="pb-0 mb-0">CHANNEL</b>
                  </small>
                </div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto mt-2">
              <NavDropdown
                className="mr-3 h6"
                title="By Thematic"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Education
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="mr-3 h6"
                title="By Donor"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Education
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="mr-3 h6"
                title="By Implementer"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Education
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="mr-3 h6"
                title="By project Name"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Education
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      )}
    </header>
  );
}
export default Header;
