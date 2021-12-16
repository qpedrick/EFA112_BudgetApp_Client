import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

const ExpenseTable = (props) => {
    const deleteExpense = (expense) => {
        fetch(`${APIURL}/expense/${expense.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchExpenses())
    }

    const expenseMapper = () => {
        return props.expenses.map((expense, index) => {
            return(
                <tr key = {index}>
                    <th scope = 'row'>{expense.id}</th>
                    <td>{expense.Transportation}</td>
                    <td>{expense.Housing}</td>
                    <td>{expense.Food}</td>
                    <td>{expense.PersonalCare}</td>
                    <td>{expense.Lifestyle}</td>
                    <td>{expense.Health}</td>
                    <td>{expense.Insurance}</td>
                    <td>{expense.Debt}</td>
                    <td>{expense.Savings}</td>
                    <td>{expense.Giving}</td>
                    <td>
                        <Button outline color = 'primary' size="sm" onClick = {() => {props.editUpdateExpense(expense); props.updateOn()}}>Update Expenses</Button>
                        <Button outline color = 'secondary' size="sm" onClick = {() => {deleteExpense(expense)}}>Delete Expenses</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Expenses</h3>
        <hr />
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Transportation</th>
                    <th>Housing</th>
                    <th>Food</th>
                    <th>Personal Care</th>
                    <th>Lifestyle</th>
                    <th>Health</th>
                    <th>Insurance</th>
                    <th>Debt</th>
                    <th>Savings</th>
                    <th>Giving</th>
                </tr>
            </thead>
            <tbody>
                {expenseMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default ExpenseTable;
