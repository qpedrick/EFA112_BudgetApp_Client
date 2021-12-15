import React from 'react';
import { Table } from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    return(
        <>
        <h3>View your full budget here</h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <Table>
            <thead>
                <tr>
                    <th>Actual Income</th>
                    <th>Budget Income</th>
                    <th>Difference between Budget and Actual</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </Table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Table>
            <thead>
                <tr>
                    <th>Actual Expenses</th>
                    <th>Budget Expenses</th>
                    <th>Difference between Budget and Actual</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
        
        </>
    )
}

export default BudgetTable;