import Accordion from 'react-bootstrap/Accordion'
import { Button } from 'reactstrap'
import React from "react";
import BudgetTable from './BudgetTable';
import IncomeIndex from '../Income/IncomeIndex';
import ExpenseIndex from '../Expense/ExpenseIndex'
import Footer from '../Site/Footer'
import './Budget.css'

const BudgetAccordian = (props) => { 
    const textStyles = {
        'textAlign': 'center',
    }

    const buttonStyles = {
        width: '200px'
    }

    return(
    <div style = {textStyles}>
    <Accordion defaultActiveKey='0' flush>
        <Accordion.Item eventKey = '0'>
            <Accordion.Header style = {textStyles}>
                Total Budget
            </Accordion.Header>
                <Accordion.Body style = {textStyles}>
                    <BudgetTable token = {props.sessionToken}/>
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <br />

    <Accordion flush>
        <Accordion.Item eventKey = '0'>
            <Accordion.Header style = {textStyles}>
                Actual Income
            </Accordion.Header>
                <Accordion.Body style = {textStyles}>
                    <IncomeIndex token = {props.sessionToken} />
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <br />

    <Accordion flush>
        <Accordion.Item eventKey = '0'>
            <Accordion.Header style = {textStyles}>
                Actual Expenses
            </Accordion.Header>
                <Accordion.Body style = {textStyles}>
                    <ExpenseIndex token = {props.sessionToken} />
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <br />

    <Button color="dark" style = {buttonStyles} onClick = {props.clearToken}>Logout</Button>
    <Footer/>
    </div>
    )}

export default BudgetAccordian