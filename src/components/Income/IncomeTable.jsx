import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

const IncomeTable = (props) => {

    const deleteIncome = (incomeBudget) => {
        fetch(`${APIURL}/income/${incomeBudget.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchIncomes())
    }

    const incomeMapper = () => {
        return props.incomeBudgets.map((incomeBudget, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{incomeBudget.id}</th>
                    <td>{incomeBudget.Paychecks}</td>
                    <td>{incomeBudget.Investments}</td>
                    <td>{incomeBudget.Reimbursements}</td>
                    <td>{incomeBudget.Misc}</td>
                    <td>
                        <Button outline color = 'primary' size="sm" onClick={() => {props.editUpdateIncomeBudget(incomeBudget); props.updateOn()}}>Update Income</Button>
                        <Button outline color = 'secondary' size="sm" onClick={() => {deleteIncome(incomeBudget)}}>Delete Income</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Income</h3>
        <hr />
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