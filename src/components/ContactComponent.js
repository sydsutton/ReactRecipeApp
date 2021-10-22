import React, {Component} from 'react';
import {
    Form, 
    FormGroup,
    Input,
    Button
} from "reactstrap"

class ContactComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            suggestion: "",
            notes: ""
        }
    }

    handleSubmit = (values) => {
        alert('Current state is ' + JSON.stringify(values))
    }

    render(){
        return (
            <div className="text-light">
                <h3 className="text-warning">Contact Form</h3>
                <p>If we don't get back to you in 24 hours... JUST WAIT LONGER</p>
                <Form onSubmit={values => this.handleSubmit(values)} className="form w-50 mx-auto">
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            placeholder="First Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            placeholder="Last Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <select className="form-control" id="suggestion">
                            <option>What would you like to see more of?</option>
                            <option>Appetizers</option>
                            <option>Main Courses</option>
                            <option>Desserts</option>
                            <option>Snacks</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text-area" 
                            id="notes" 
                            placeholder="Notes" 
                            style={{height: "10rem"}}
                        />
                    </FormGroup>
                    <Button className="btn" type="submit" color="warning">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ContactComponent;