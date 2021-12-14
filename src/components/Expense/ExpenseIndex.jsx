import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ExpenseCreate from './ExpenseCreate';
import ExpenseTable from './ExpenseTable';
import ExpenseEdit from './ExpenseEdit';

const ExpenseIndex = (props) => {
    const [expenses, setExpenses] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [expensesToUpdate, setExpensesToUpdate] = useState({});
    const fetchExpenses = () => {
        fetch('http://localhost:3001/expense', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        })
        }).then((res) => res.json())
        .then((expenseData) => {
            setExpenses(expenseData)
            console.log(expenseData)
    })
    }

const editUpdateExpense = (expense) => {
    setExpensesToUpdate(expense);
    console.log(expense);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false)
}

useEffect(() => {
    fetchExpenses();
})

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
                {updateActive ? <ExpenseEdit expensesToUpdate = {expensesToUpdate} updateOff = {updateOff} token = {props.token} fetchExpenses = {fetchExpenses} /> : <></>}
            </Row>
        </Container>
    )
}

export default ExpenseIndex