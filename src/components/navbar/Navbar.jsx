import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../img/UTEST (4).png";
import "../../styles/slyle-home.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useSelector } from "react-redux";
import { UserProfile } from "../../user/UserProfile";

const NavBar = () => {
  const user = useSelector(store => store.login);

  return (
    <div>
      <Container >
        <Navbar >
          <Navbar.Brand >
            <Link to="/">
              <div>
                <img src={logo} alt="logo" className="img-fluid logo" />{" "}
              </div>
            </Link>

          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end respose">
            <Navbar.Text>
              <Link to="/about">
                {/* <button className="btn btn-primary ">
                  Acerca de
                </button> */}
              </Link>
              {" "}

              {/* user ? (<Link to="/register">
                <button className="btn btn-primary">
                  Registro
                </button>
              </Link>) : ("") */
              }
              {user ? (<UserProfile  placement="end" name="end" />):(<Link to="/login">
                <Icon icon="bx:bx-user-circle" height="50" />
              </Link>)}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
