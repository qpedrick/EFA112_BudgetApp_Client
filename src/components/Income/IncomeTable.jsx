import React from 'react';
import { Table, Button } from 'reactstrap';

const IncomeTable = (props) => {

    const deleteIncome = (incomeBudget) => {
        fetch(`https://localhost:3001/income/${incomeBudget.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchIncomes())
    }

    const incomeMapper = () => {
        return props.incomeBudgets.map((incomeBudget, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{incomeBudget.id}</th>
                    <td>{incomeBudget.paychecks}</td>
                    <td>{incomeBudget.investments}</td>
                    <td>{incomeBudget.reimbursements}</td>
                    <td>{incomeBudget.misc}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateIncomeBudget(incomeBudget); props.updateOn()}}>Update Budget</Button>
                        <Button color="danger" onClick={() => {deleteIncome(incomeBudget)}}>Delete Budget</Button>
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
                    <th>#</th>
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