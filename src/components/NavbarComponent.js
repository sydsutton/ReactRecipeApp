import React, {Component} from "react"
import logo from "../images/logo.png"
import {
    Navbar,
    NavbarToggler, 
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form, 
    FormGroup,
    Input
} from "reactstrap"

import {NavLink} from "react-router-dom"

class ModalComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalOpen: false,
            username: "",
            password: "",
            usernameError: "",
            passwordError: ""
        }
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let usernameError = ""
        let passwordError = ""

        if(!this.state.username){
            usernameError= "Please put in a username"
        }
        if(!this.state.password){
            passwordError= "Please put in a password"
        }

        if(usernameError || passwordError){
            this.setState({usernameError, passwordError})
            return false
        } 
        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()

        if(isValid){
            alert(`
            Welcome to the site, ${this.state.username}
            `)
        
            this.setState({
                username: "",
                password: "",
                usernameError: "",
                passwordError: ""
            })
            this.toggleModal()
        }
    }

    render(){
        return (
            <div>
                <Button onClick={this.toggleModal} className="badge badge-pill border border-dark text-dark px-4 py-2 ml-4" outline color="warning">Login</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="mx-auto w-75">
                    <ModalHeader toggle={this.toggleModal}>
                        <div className="d-flex flex-row align-items-center">
                            <img src={logo} alt="Logo" width="30" className="mr-3"/>
                            <h2>Login</h2> 
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input 
                                    type="text" 
                                    placeholder="Username" 
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    id="username" 
                                    name="username"
                                />
                                <div className="text-danger small">{this.state.usernameError}</div>
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    id="password" 
                                    name="password"
                                />
                                <div className="text-danger small">{this.state.passwordError}</div>
                            </FormGroup>
                            <FormGroup className="text-center mx-auto">
                                <div>
                                    <Button type="submit" className="badge badge-pill px-4 py-2 mr-2 mx-4" color="warning">Login</Button>
                                </div>
                            </FormGroup>
                            <hr />
                            <FormGroup className="text-center mx-auto">
                                <div className="small mb-2 text-secondary">Don't have an account?</div>
                                <Button type="submit" className="badge badge-pill border py-2 px-4 text-center mx-4" color="light">Create an account</Button>
                            </FormGroup>
                            <h6 className="mx-auto text-center my-3">OR</h6>
                            <FormGroup className="d-flex flex-column w-50 mx-auto">
                                <Button onClick={this.toggleModal} outline className="badge badge-pill px-3 py-2 mb-2" color="primary"><i className="fa fa-google-plus fa-lg mr-2"/>Sign Up with Google</Button>
                                <Button onClick={this.toggleModal} outline className="badge badge-pill px-3 py-2" color="primary"><i className="fa fa-facebook fa-lg mr-2"/>Sign Up with Facebook</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

class NavbarComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false,
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
                        <NavbarBrand href="/" className="d-flex flex-row"><img src={logo} alt="logo" height="50" /><h2>CiY</h2></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="text-right">
                            <Nav navbar className="ml-auto">
                                <NavItem className="my-1 ml-4">
                                    <NavLink to="/" className="text-dark">Menu</NavLink>
                                </NavItem>
                                <NavItem className="m-1 ml-4">
                                    <NavLink to="/team" className="text-dark">Our Team</NavLink>
                                </NavItem>
                                <NavItem className="m-1 ml-4">
                                    <NavLink to="/contact" className="text-dark">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <ModalComponent/>
                        </Collapse>
                    </div>
                </Navbar>
        )
    }
}
export default NavbarComponent