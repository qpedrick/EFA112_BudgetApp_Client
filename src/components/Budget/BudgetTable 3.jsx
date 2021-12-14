import React from 'react';
import { Table, Button } from 'reactstrap';

const BudgetTable = (props) => {
    return(
        <>
        <h3>View your full budget here</h3>
        <hr />
        <Table>
            <thead>
                <tr>
                    <th>Income</th>
                    <th>Expenses</th>
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