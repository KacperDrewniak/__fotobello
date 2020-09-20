import React from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

const NavbarComponent = () => {
    return <Navbar id="navbar" >
        <NavbarBrand href="/" className="mr-auto"><img className="logo" src="/logo.png"/></NavbarBrand>
        <Nav>
            <NavItem>
                <NavLink href="/categories">Kategorie</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Opinie</NavLink>
            </NavItem>

            <NavItem>
                <NavLink href="#">Kontakt</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
}

export default NavbarComponent;