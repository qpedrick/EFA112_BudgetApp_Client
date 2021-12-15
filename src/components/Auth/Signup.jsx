import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Container, Row } from 'reactstrap';
import "./Auth.css"
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



    return (
        <Container className="formsContainer">
            <Row>
                <h1>Plan Your Budget</h1>
                <h3>Sign Up</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' value={email} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input onChange={(e) => setPassword(e.target.value)} type='password' name='password' placeholder='Password' value={password} minLength='5' />
                    </FormGroup>
                        <Button type='submit' className="button" outline color="dark">Sign Up</Button>
                </Form>
            </Row>
        </Container>

    )
}


export default Signup;