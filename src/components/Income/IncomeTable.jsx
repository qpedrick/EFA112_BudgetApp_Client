import React from 'react';
import { Table, Button } from 'reactstrap';

const IncomeTable = (props) => {

    const deleteIncome = (incomeBudget) => {
        fetch(`https://localhost:6000/income/${incomeBudget.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchIncome())
    }

    const incomeMapper = () => {
        return props.incomeBudget.map((incomeBudget, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{incomeBudget.id}</th>
                    <td>{incomeBudget.Paychecks}</td>
                    <td>{incomeBudget.Investments}</td>
                    <td>{incomeBudget.Reimbursements}</td>
                    <td>{incomeBudget.Misc}</td>
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