import React from "react"
import {Nav, NavItem, NavLink} from "reactstrap";

const Footer = () => {
    return <footer id="footer" className="p-5 ">
        <Nav className="d-flex justify-content-center">
            <NavItem>
                <NavLink href="/">Fotobello</NavLink>
            </NavItem>
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
    </footer>
}

export default Footer