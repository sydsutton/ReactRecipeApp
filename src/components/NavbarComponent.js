import React, {Component} from "react"
import {
    Navbar,
    NavbarToggler, 
    NavbarBrand,
    Collapse,
    Nav,
    NavItem
} from "reactstrap"

import {NavLink} from "react-router-dom"

class NavbarComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
        }
    }
    toggleNav = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
                <Navbar className="navbar-expand-md navbar-light bg-light sticky-top mb-5">
                    <div className="container">
                        <NavbarBrand href="/"><h2>CiY</h2></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="text-right">
                            <Nav navbar className="ml-auto">
                                <NavItem className="my-1 mx-2">
                                    <NavLink to="/" className="text-dark">Menu</NavLink>
                                </NavItem>
                                <NavItem className="m-1 mx-2">
                                    <NavLink to="/team" className="text-dark">Our Team</NavLink>
                                </NavItem>
                                <NavItem className="m-1 mx-2">
                                    <NavLink to="/" className="text-dark">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        )
    }
}
export default NavbarComponent