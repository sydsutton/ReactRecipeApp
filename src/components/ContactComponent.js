import React, {Component} from "react"

import {
    Form, 
    FormGroup,
    Input,
    Button
} from "reactstrap"

class ContactComponent extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            suggestion: "",
            notes: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            suggestionError: ""
        }
    }
    
    validate = () => {
        let firstNameError = ""
        let lastNameError = ""
        let emailError = ""
        let suggestionError = ""

        if (!this.state.firstName.length){
            firstNameError= "Please put in your first name"
        }
        
        if(!this.state.lastName.length){
            lastNameError= "Please put in your last name"
        } 
        
        if (!this.state.email){
            emailError= "Please put in a valid email"
        }

        if(!this.state.suggestion){
            suggestionError = "We're open to suggestions"
        }

        if(firstNameError || lastNameError || emailError || suggestionError){
            this.setState({firstNameError, lastNameError, emailError, suggestionError})
            return false
        } 
        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()
        if(isValid){
            alert(`
            Thank you for the following submission:
            
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            You'd like to see more ${this.state.suggestion} on our page
            Notes: ${this.state.notes}
        `)
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            suggestion: "",
            notes: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            suggestionError: ""
        })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="text-light">
                <div className="container faded-background rounded py-4" style={{maxWidth: "40rem"}}>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-warning">Contact Form</h3>
                            <p>If we don't get back to you in 24 hours... JUST WAIT LONGER</p>
                            <Form className="form w-75 mx-auto" onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Input 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName" 
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        placeholder="First Name"
                                    />
                                    <div className="text-danger small text-left">{this.state.firstNameError}</div>
                                </FormGroup>
                                <FormGroup>
                                    <Input 
                                        type="text" 
                                        name="lastName" 
                                        id="lastName" 
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        placeholder="Last Name"
                                    />
                                    <div className="text-danger small text-left">{this.state.lastNameError}</div>
                                </FormGroup>
                                <FormGroup>
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="Email"
                                    />
                                    <div className="text-danger small text-left">{this.state.emailError}</div>
                                </FormGroup>
                                <FormGroup>
                                    <select 
                                        className="form-control" 
                                        id="suggestion"
                                        name="suggestion"
                                        onChange={this.handleChange}
                                        value={this.state.suggestion}>
                                            <option>I would like to see more...</option>
                                            <option>Appetizers</option>
                                            <option>Main Courses</option>
                                            <option>Desserts</option>
                                            <option>Snacks</option>
                                    </select>
                                    <div className="text-danger small text-left">{this.state.suggestionError}</div>
                                </FormGroup>
                                <FormGroup>
                                    <textarea
                                        type="text-area" 
                                        id="notes" 
                                        rows="6"
                                        value={this.state.notes}
                                        name="notes"
                                        onChange={this.handleChange}
                                        placeholder="Notes (optional)" 
                                        style={{width: "100%"}}
                                        className="p-3 rounded"
                                    />
                                </FormGroup>
                                <Button className="btn" type="submit" color="warning">Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactComponent;