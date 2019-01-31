import React, { Component } from 'react';
import classes from "./NavBar.css";
import { Navbar, Button, NavItem, Nav, ToggleButtonGroup, ToggleButton, ButtonToolbar } from 'react-bootstrap'

class NavBar extends Component {
  goTo (route) {
    this.props.history.replace(`/${route}`)
  }

  login () {
    console.log("log in method");
    this.props.auth.login();
  }

  logout () {
    console.log("log out method");
    this.props.auth.logout();
  }

  render () {
    console.log("this.props.auth: "+ this.props.auth);
    const {isAuthenticated} = this.props.auth;

    return (
      <Navbar inverse collapseOnSelect className={classes.container}>
        <Navbar.Header>
          <Navbar.Brand inverse collapseOnSelect className={classes.copiteasy}>
            <a href="/">COP IT EASY</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Button className={classes.removeButton} bsSize="small">ACTIVATE</Button>
            </NavItem>
            <NavItem eventKey={1} href="/myprofile" className={classes.myprofile}>
              My profile
            </NavItem>
            <NavItem eventKey={2} href="/mycoins" className={classes.mycoins}>
              My coins
            </NavItem>
            <React.Fragment>
            {
              !isAuthenticated() && (
                <NavItem
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </NavItem>
              )
            }
            {
              isAuthenticated() && (
                <NavItem
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </NavItem>
              )
            }
            </React.Fragment>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  };
}

export default NavBar;