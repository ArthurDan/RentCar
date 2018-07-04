import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Button} from 'mdbreact';
import {Link } from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Rent from './Rent';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Navbar color="pink" dark expand="md" scrolling fixed="top">
                <NavbarBrand style={{left: '100px'}} href="/">
                    <Fa icon="car"/><strong> RentCar</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                    <NavItem >
                        <NavLink style={{padding: '0px'}} to="#"><Rent/></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink style={{padding: '0px'}} to="#"><Search/></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink style={{padding: '0px'}} to="#"><Login/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{padding: '0px'}} to="#"><Register/></NavLink>                              
                        </NavItem>
                        <NavItem >
                        <NavLink style={{padding: '0px'}} to="#"><Link to="/profil"><Button style={{padding: '10px 20px'}} color="pink"><Fa icon="user"/> Profile</Button></Link></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink style={{padding: '0px'}} to="#"><Contact/></NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;