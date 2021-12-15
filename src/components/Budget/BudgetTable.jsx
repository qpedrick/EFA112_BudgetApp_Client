import React, { useState, useEffect } from 'react';
import { Table, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    const [actualIncomeValues, setActualIncomeValues] = useState([]);
    const [actualExpenseValues, setActualExpenseValues] = useState([]);

    const formStyle = {
        "min-width": "100%",
        "max-width": "100%"
    }

    const btnStyle = {
        "color": "white",
        "background-color": "black"
    }

    const getIncome = () => {
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then(res => setActualIncomeValues(res[0]))
            .then(console.log(actualIncomeValues))
            .catch(err => console.log(err))
    }

    const getExpense = () => {
        fetch('http://localhost:3001/expense/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then(res => setActualExpenseValues(res[0]))
            .then(console.log(actualExpenseValues))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <h3>View Full Budget</h3>
                <br />
                <br />
                <br />
                <hr />
                <Button color="dark" onClick={getIncome}>Get Actual Income Values</Button>


                <Col m="3">
                    <Table>
                        <thead>
                            <tr>
                                <th>Actual Income</th>
                                <th>Budget Income</th>
                                <th>Budget-to-Actuals</th>
                            </tr>
                        </thead>
                        <td>
                            Paychecks:
                            {actualIncomeValues.Paychecks}
                            <br />
                            <br />
                            Investments:
                            {actualIncomeValues.Investments}
                            <br />
                            <br />
                            Reimbursements:
                            {actualIncomeValues.Reimbursements}
                            <br />
                            <br />
                            Misc:
                            {actualIncomeValues.Misc}
                            <br />
                            <br />
                        </td>
                        <td>

                        </td>
                </Table>
            </Col>
            <tbody>

            </tbody>

    <Table>
        <thead>
            <tr>
                <th>Actual Expenses</th>
                <th>Budget Expenses</th>
                <th>Budget-to-Actuals</th>
            </tr>
        </thead>
        <tbody>
            Transportation:
            {actualExpenseValues.Transportation}
            <br />
            <br />
            Housing:
            {actualExpenseValues.Housing}
            <br />
            <br />
            Food:
            {actualExpenseValues.Food}
            <br />
            <br />
            Personal Care:
            {actualExpenseValues.PersonalCare}
            <br />
            <br />
            Lifestyle:
            {actualExpenseValues.Lifestyle}
            <br />
            <br />
            Health:
            {actualExpenseValues.Health}
            <br />
            <br />
            Insurance:
            {actualExpenseValues.Insurance}
            <br />
            <br />
            Debt:
            {actualExpenseValues.Debt}
            <br />
            <br />
            Savings:
            {actualExpenseValues.Savings}
            <br />
            <br />
            Giving:
            {actualExpenseValues.Giving}
            <br />
            <br />
            <Button color="dark" onClick={getExpense} >Get Actual Expense Values</Button>
        </tbody>
    </Table>
        
        </Row >
        </Container >
    )
}

export default BudgetTable;