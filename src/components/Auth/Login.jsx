import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/user/login', {
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
            <h1>Login</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor = 'email'>Email</Label>
                    <Input onChange = {(e) => setEmail(e.target.value)} value = {email} type = 'email' name = 'email' placeholder = 'Email'/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'password'>Password</Label>
                    <Input onChange = {(e) => setPassword(e.target.value)} value = {password} type = 'password' name = 'password' placeholder = 'Password'/>
                </FormGroup>
                <Button type = 'submit'>Login!</Button>
            </Form>
        </div>
    )
}

export default Login;