import React, { useState, useEffect } from 'react';
import { Table, Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    const [paycheckTotal, setPaycheckTotal] = useState(0);
    const [investmentTotal, setInvestmentTotal] = useState(0);
    const [reimbursementTotal, setReimbursementTotal] = useState(0);
    const [miscTotal, setMiscTotal] = useState(0);

    const formStyle = {
        "min-width": "100%",
        "max-width": "100%"
    }

    const btnStyle = {
        "color": "white",
        "background-color": "black"
    }

    const getIncome = () => {
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then(res => addIncome(res))
            .catch(err => console.log(err))
    }


    const addIncome = (res) => {
        let pTotal = 0;
        let iTotal = 0;
        let rTotal = 0;
        let mTotal = 0;
        for(let object of res){
            pTotal +=  object.Paychecks;
            setPaycheckTotal(pTotal)
            iTotal +=  object.Investments;
            setInvestmentTotal(iTotal)
            rTotal +=  object.Reimbursements;
            setReimbursementTotal(rTotal)
            mTotal +=  object.Misc;
            setMiscTotal(mTotal)
        }
    }

    return (
        <Container>
            <Row>
                <h3>View Full Budget</h3>
                <br />
                <br />
                <br />
                <hr />
                <Button onClick={getIncome}>Get Actual Income Values</Button>

                <Col m="3">
                    <Table>
                        <thead>
                            <tr>
                                <th>Actual Income</th>
                                <th>Budget Income</th>
                                <th>Budget-to-Actuals</th>
                            </tr>
                        </thead>
                        <td>
                            Paychecks: 
                            {` ${paycheckTotal}`}
                            <br />
                            <br />
                            Investments: 
                            {` ${investmentTotal}`}
                            <br />
                            <br />
                            Reimbursements: 
                            {` ${reimbursementTotal}`}
                            <br />
                            <br />
                            Misc: 
                            {` ${miscTotal}`}
                            <br />
                            <br />
                        </td>
                        <td>

                        </td>
                </Table>
            </Col>
            <tbody>

            </tbody>

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
            <br />
            <br />
            Housing:
            <br />
            <br />
            Food:
            <br />
            <br />
            Personal Care:
            <br />
            <br />
            Lifestyle:
            <br />
            <br />
            Health:
            <br />
            <br />
            Insurance:
            <br />
            <br />
            Debt:
            <br />
            <br />
            Savings:
            <br />
            <br />
            Giving:
            <br />
            <br />
        </tbody>
    </Table>
        
        </Row >
        </Container >
    )
}

export default BudgetTable;