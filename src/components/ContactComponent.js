import {
    Form, 
    FormGroup,
    Input,
    Button,
    TextArea
} from "reactstrap"

function ContactComponent(props){
    return (
        <div className="text-light">
            <h3 className="text-warning">Contact Form</h3>
            <p>If we don't get back to you in 24 hours... JUST WAIT LONGER</p>
            <Form className="form w-50 mx-auto" onSubmit={props.handleSubmit}>
                <FormGroup>
                    <Input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        value={props.form.firstName}
                        onChange={props.handleChange}
                        placeholder="First Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        value={props.form.lastName}
                        onChange={props.handleChange}
                        placeholder="Last Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={props.form.email}
                        onChange={props.handleChange}
                        placeholder="Email"
                    />
                </FormGroup>
                <FormGroup>
                    <select 
                        className="form-control" 
                        id="suggestion"
                        name="suggestion"
                        onChange={props.handleChange}
                        value={props.form.suggestion}>
                            <option>I would like to see more...</option>
                            <option>Appetizers</option>
                            <option>Main Courses</option>
                            <option>Desserts</option>
                            <option>Snacks</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <textarea
                        type="text-area" 
                        id="notes" 
                        rows="6"
                        value={props.form.notes}
                        name="notes"
                        onChange={props.handleChange}
                        placeholder="Notes" 
                        style={{width: "100%"}}
                        className="p-3"
                    />
                </FormGroup>
                <Button className="btn" type="submit" color="warning">Submit</Button>
            </Form>
        </div>
    )
}

export default ContactComponent;