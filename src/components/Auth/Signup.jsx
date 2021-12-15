import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/user/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                user:
                {
                    email: email,
                    password: password
                }
                }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        })
        .then(
            (res) => res.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
        .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor = 'email'>Email</Label>
                    <Input onChange = {(e) => setEmail(e.target.value)} type= 'email' placeholder = 'Email' value = {email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'password'>Password</Label>
                    <Input onChange = {(e) => setPassword(e.target.value)} type = 'password' name = 'password' placeholder = 'Password' value = {password} minLength = '5' />
                </FormGroup>
                <Button type = 'submit'>Sign Up</Button>
            </Form>
        </div>
    )
}


export default Signup;