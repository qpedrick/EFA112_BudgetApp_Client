import React from 'react';
import { Table, Button } from 'reactstrap';

const ExpenseTable = (props) => {
    const deleteExpense = (expense) => {
        fetch(`http://localhost:3001/expense/${expense.id}`, {
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
                        <Button color = 'warning' onClick = {() => {props.editUpdateExpense(expense); props.updateOn()}}>Update</Button>
                        <Button color = 'danger' onClick = {() => {deleteExpense(expense)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Expenses Table heading</h3>
        <hr />
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>transportation</th>
                    <th>housing</th>
                    <th>food</th>
                    <th>personal care</th>
                    <th>lifestyle</th>
                    <th>health</th>
                    <th>insurance</th>
                    <th>debt</th>
                    <th>savings</th>
                    <th>giving</th>
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
