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

    const ExpenseMapper = () => {
        return props.expenses.map((expense, index) => {
            return(
                <tr key = {index}>
                    <th scope = 'row'>{expense.id}</th>
                    <td>{expense.transportation}</td>
                    <td>{expense.housing}</td>
                    <td>{expense.food}</td>
                    <td>{expense.personalCare}</td>
                    <td>{expense.lifestyle}</td>
                    <td>{expense.health}</td>
                    <td>{expense.insurance}</td>
                    <td>{expense.debt}</td>
                    <td>{expense.savings}</td>
                    <td>{expense.giving}</td>
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
                {ExpenseMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default ExpenseTable;
