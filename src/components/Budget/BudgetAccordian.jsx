import Accordion from 'react-bootstrap/Accordion'
import { Button } from 'reactstrap'
import React from "react";
import BudgetTable from './BudgetTable';
import IncomeIndex from '../Income/IncomeIndex';
import ExpenseIndex from '../Expense/ExpenseIndex'

const BudgetAccordian = (props) => { 
    const textStyles = {
        'textAlign': 'center',
    }

    const buttonStyles = {
        width: '200px'
    }

    return(
    <div style = {textStyles}>
    <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey = '0'>
            <Accordion.Header style = {textStyles}>
                TotalBudget
            </Accordion.Header>
                <Accordion.Body style = {textStyles}>
                    <BudgetTable />
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <br />

    <Accordion>
        <Accordion.Item eventKey = '0'>
            <Accordion.Header style = {textStyles}>
                Income
            </Accordion.Header>
                <Accordion.Body style = {textStyles}>
                    <IncomeIndex token = {props.sessionToken} />
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <br />

    <Accordion>
        <Accordion.Item eventKey = '0'>
            <Accordion.Header style = {textStyles}>
                Expenses
            </Accordion.Header>
                <Accordion.Body style = {textStyles}>
                    <ExpenseIndex token = {props.sessionToken} />
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    <br />

    <Button style = {buttonStyles} onClick = {props.clearToken}>Logout</Button>

    </div>
    )}

export default BudgetAccordian