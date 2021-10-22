import React from 'react';
import {
    Form, 
    FormGroup,
    Input,
    Button
} from "reactstrap"

function ContactComponent() {
    return (
        <div className="text-light">
            <h3 className="text-warning">Contact Form</h3>
            <p>If we don't get back to you in 24 hours... JUST WAIT LONGER</p>
            <Form className="form w-50 mx-auto">
                <FormGroup>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="lastName" id="lastName" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <select className="form-control">
                        <option>What would you like to see more of?</option>
                        <option>Appetizers</option>
                        <option>Main Courses</option>
                        <option>Desserts</option>
                        <option>Snacks</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <Input type="text-area" placeholder="Notes" style={{height: "10rem"}}/>
                </FormGroup>
                <Button className="btn" type="submit" color="warning">Submit</Button>
            </Form>
        </div>
    );
}

export default ContactComponent;