import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css"

const Auth = (props) => {


    const [toggle, setToggle] = useState(true);
    const [loginOrRegister, setLoginOrRegister] = useState("Sign Up");

    const handleToggle = () => {
        if (toggle === true) {
            setToggle(false);
            setLoginOrRegister("Go to Login");
        } else {
            setToggle(true);
            setLoginOrRegister("Go toSign Up");
        }
    }


    return (
        <Container className='auth-container'>

            <Row mb-3>
                {toggle ? <Login updateToken={props.updateToken} /> : <Signup updateToken={props.updateToken} />}
                <Col>
                <Button outline color="dark" className="button"  onClick={handleToggle}>{loginOrRegister}</Button>

                </Col>
            </Row>

        </Container>
    )
}

export default Auth;

