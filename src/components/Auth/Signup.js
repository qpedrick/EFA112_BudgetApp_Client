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
<<<<<<< HEAD
            props.updateToken(data.sessionToken)
            localStorage.setItem('sessionToken', data.sessionToken)
=======
            props.updateToken(data.sessionToken);
>>>>>>> dc1fe87269f4c1cb06629600195bc2597887a697
        })
        .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor = 'email'>Email</Label>
                    <Input onChange = {(e) => setEmail(e.target.value)} type= 'email' placeholder = 'enter email here!' value = {email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'password'>Password</Label>
                    <Input onChange = {(e) => setPassword(e.target.value)} type = 'password' name = 'password' placeholder = 'enter password here!' value = {password} minLength = '5' />
                </FormGroup>
                <Button type = 'submit'>Sign Up!</Button>
            </Form>
        </div>
    )
}


export default Signup;