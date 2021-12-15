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
                    <h3></h3>
                    <br />
                    <br />
                Using this application, you can track budgeted income and expenses and compare them to your actual income and expenses, as well as see the totals displayed against each other with a profit/loss statement.
                </Col>
                <Col md = '4' className = 'login-col' style = {styles}>
                    <Login updateToken = {props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;