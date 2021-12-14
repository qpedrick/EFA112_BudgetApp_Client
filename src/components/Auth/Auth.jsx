import React from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
    const styles = {
        'textAlign': 'center',
    }
    
    return(
        <Container className = 'auth-container'>
            <h1 style = {styles}>Plan Your Budget</h1>
            <Row>
                <Col md = '4' className = 'signup-col' style = {styles}>
                    <Signup updateToken = {props.updateToken} />
                </Col>
                <Col md = '4' className = 'description-col' style = {styles}>
                    <br/>
                    <br/>
                    <h3>What the heck is this thing?</h3>
                    <br />
                    <br />
                Using this application you can track expenses and income and see the totals displayed against each other.
                </Col>
                <Col md = '4' className = 'login-col' style = {styles}>
                    <Login updateToken = {props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;