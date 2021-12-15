import React from 'react';
import { Table } from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    return(
        <>
        <h3>View Full Budget</h3>
        <br />
        <br />
        <br />
        <hr />
        <Table>
            <thead>
                <tr>
                    <th>Actual Income</th>
                    <th>Budget Income</th>
                    <th>Budget-to-Actuals</th>
                </tr>
            </thead>
            <tbody>
                Paychecks:
                <br/>
                <br/>
                Investments:
                <br/>
                <br/>
                Reimbursements:
                <br/>
                <br/>
                Misc:
                <br/>
                <br/>
            </tbody>
        </Table>
        <br />
        <br />
        <br />
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
                <br/>
                <br/>
                Housing:
                <br/>
                <br/>
                Food:
                <br/>
                <br/>
                Personal Care:
                <br/>
                <br/>
                Lifestyle:
                <br/>
                <br/>
                Health:
                <br/>
                <br/>
                Insurance:
                <br/>
                <br/>
                Debt:
                <br/>
                <br/>
                Savings:
                <br/>
                <br/>
                Giving:
                <br/>
                <br/>
            </tbody>
        </Table>
        
        </>
    )
}

export default BudgetTable;