import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    return(
        <div>
            <h1>Sign Up</h1>
            <Form>
                <FormGroup>
                    <Label htmlFor = 'email'>Email</Label>
                    <Input type = 'email' name = 'email' placeholder = 'enter email here!'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'password'>Password</Label>
                    <Input type = 'password' name = 'password' placeholder = 'enter password here!'/>
                </FormGroup>
                <Button type = 'submit'>Sign Up!</Button>
            </Form>
        </div>
    )
}


export default Signup;