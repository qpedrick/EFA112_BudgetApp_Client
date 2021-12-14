import React from 'react';
import { Table, Button } from 'reactstrap';

const IncomeTable = (props) => {

    const deleteIncome = (incomebudget) => {
        fetch(`https://localhost:3001/income/${incomebudget.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchIncome())
    }

    const incomeMapper = () => {
        return props.incomebudget.map((incomebudget, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{incomebudget.id}</th>
                    <td>{incomebudget.Paychecks}</td>
                    <td>{incomebudget.Investments}</td>
                    <td>{incomebudget.Reimbursements}</td>
                    <td>{incomebudget.Misc}</td>
                    <td>
                        <Button color="danger" onClick={() => {deleteIncome(incomebudget)}}>Delete Budget</Button>
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