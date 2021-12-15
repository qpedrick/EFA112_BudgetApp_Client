import React, {useState, useEffect} from 'react';
import {Table, Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    const [paychecks, setPaychecks] = useState(0);
    const [investments, setInvestments] = useState(0);
    const [reimbursements, setReimbursements] = useState(0);
    const [misc, setMisc] = useState(0);

    const formStyle = {
        "min-width": "100%" ,
        "max-width": "100%"
    }

    const btnStyle = {
        "color": "white",
        "background-color": "black"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/income/create/', {
            method: 'POST',
            body: JSON.stringify({Paychecks: paychecks, Investments: investments, Reimbursements: reimbursements, Misc: misc}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((incomeData) => {
            console.log(incomeData);
            setPaychecks(0);
            setInvestments(0);
            setReimbursements(0);
            setMisc(0);
            props.fetchIncomes();
        })
        .catch(err => console.log(err))
    }

    return(
        <Container>
        <Row>
        <h3>View Full Budget</h3>
        <br />
        <br />
        <br />
        <hr />        
        <Form onSubmit={handleSubmit} style={formStyle} >

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
            </td>
                <td>        
            <Col >
            <FormGroup >
                <Label htmlFor="paychecks"/>
                <p>Enter paycheck income:</p>
                <Input name="paychecks" value={paychecks} placeholder="Enter paycheck income" onChange={(e) => setPaychecks(e.target.value)}/>
            </FormGroup>
            <FormGroup >
                <Label htmlFor="investments"/>
                <p>Enter investments income:</p>
                <Input name="investments" value={investments} placeholder="Enter investments income" onChange={(e) => setInvestments(e.target.value)}/>
            </FormGroup>
            <FormGroup >
                <Label htmlFor="reimbursements"/>
                <p>Enter reimbursements income:</p>
                <Input name="reimbursements" value={reimbursements} placeholder="Enter reimbursements income" onChange={(e) => setReimbursements(e.target.value)}/>
            </FormGroup>
            <FormGroup >
                <Label htmlFor="misc"/>
                <p>Enter miscellaneous income:</p>
                <Input name="misc" value={misc} placeholder="Enter miscellaneous income" onChange={(e) => setMisc(e.target.value)}/>
            </FormGroup>
            <Button type="submit" style={btnStyle} >Submit Budget</Button>
            </Col>
            </td>
            <tbody>

            </tbody>
            </Table>
            </Col>

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
        </Form>
        </Row>
        </Container>
    )
}

export default BudgetTable;