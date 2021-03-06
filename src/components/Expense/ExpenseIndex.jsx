import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ExpenseCreate from './ExpenseCreate';
import ExpenseTable from './ExpenseTable';
import ExpenseEdit from './ExpenseEdit';
import APIURL from '../../helpers/environment';

const ExpenseIndex = (props) => {
    const [expenses, setExpenses] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [expenseToUpdate, setExpenseToUpdate] = useState({});
    const fetchExpenses = () => {
        fetch(`${APIURL}/expense`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        })
        }).then((res) => res.json())
        .then((expenseData) => {
            setExpenses(expenseData)
    })
    }

const editUpdateExpense = (expense) => {
    setExpenseToUpdate(expense);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false)
}

useEffect(() => {
    fetchExpenses();
}, [])

    return(
        <Container>
            <Row>
                <Col md = '3'>
                    <ExpenseCreate fetchExpenses = {fetchExpenses} token = {props.token} />
                </Col>
                <Col md = '9'>
                    <ExpenseTable expenses = {expenses} editUpdateExpense = {editUpdateExpense} 
                    updateOn = {updateOn} fetchExpenses = {fetchExpenses} token = {props.token} />
                </Col>
                {updateActive ? <ExpenseEdit expenseToUpdate = {expenseToUpdate} updateOff = {updateOff} 
                token = {props.token} fetchExpenses = {fetchExpenses} /> 
                : <></>}
            </Row>
        </Container>
    )
}

export default ExpenseIndex