import React from 'react';
import { Table, Button } from 'reactstrap';

const IncomeTable = (props) => {

    const deleteIncome = (income) => {
        fetch(`https://localhost:3001/income/${income.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchIncomes())
    }

    const incomeMapper = () => {
        return props.incomes.map((income, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{income.id}</th>
                    <td>{income.Paychecks}</td>
                    <td>{income.Investments}</td>
                    <td>{income.Reimbursements}</td>
                    <td>{income.Misc}</td>
                    <td>
                        <Button color="danger" onClick={() => {deleteIncome(income)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h2>Budget</h2>
        <Table>
            <thead>
                <tr>
                    <th>Paychecks</th>
                    <th>Investments</th>
                    <th>Reimbursements</th>
                    <th>Misc</th>
                </tr>
            </thead>
            <tbody>
                {incomeMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default IncomeTable;