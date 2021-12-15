import React from 'react';
import { Table } from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    return(
        <>
        <h3>View your full budget here</h3>
        <hr />
        <Table>
            <thead>
                <tr>
                    <th>Budgeted Income</th>
                    <th>Actual Income</th>
                        {/* < IncomeTable /> */}
                    <th>Budgeted Expenses</th>
                    <th>Actual Expenses</th>
                    <th>Profit/Loss</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
        </>
    )
}

export default BudgetTable;