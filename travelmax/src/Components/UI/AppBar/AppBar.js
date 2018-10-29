import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../Assets/Images/Logo/TravelMax_Logo_orange.png';
import loginModal from '../Modal/loginModal';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.LoginHandler = this.LoginHandler.bind(this);
    this.state = {
      isOpen: false,
      Login: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  LoginHandler = () => {
   return <loginModal />;
  };
  
  render() {
    
    const Style = {
    content: {
      backgroundColor: 'grey', 
      position: 'fixed'
    }
  };
  
  
    return (
      <div style={{height: '100px', marginTop: '-35px'}}>
        <Navbar style={{marginBottom: '-50px'}} color="dark" fixed dark expand="md">
          <NavbarBrand href="/"><img src={logo} height='100' width='100' alt="Travelmax logo" name="Travelmax logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/flights">Flights</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hotels">Hotels</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.LoginHandler}>
                    Login
                  </DropdownItem>
                  <DropdownItem>
                    Register
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}