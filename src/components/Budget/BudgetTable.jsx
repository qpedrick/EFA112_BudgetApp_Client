import React, {useState, useEffect} from 'react';
import {Table, Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import IncomeTable from '../Income/IncomeTable';

const BudgetTable = (props) => {
    const [actualValues, setActualValues] = useState([]);

    const formStyle = {
        "min-width": "100%" ,
        "max-width": "100%"
    }

    // const tbodyStyle = {
    //     "margin-left": "50rem",
    // }

    const getIncome = () => {
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then(res => setActualValues(res[0]))
        .then(console.log(actualValues))
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
        <Button onClick = {getIncome}>Get Actual Income values</Button>        


        <Col m="3">        
            <Table>
            <thead>
                <tr>
                    <th>Actual Income</th>
                    <th>Budget Income</th>
                    <th>Budget-to-Actuals</th>
                </tr>
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
                <td>        
                
        </td>
            </thead>
            </Table>
        </Col>
            <tbody>
                
            </tbody>
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
        
        </Row>
        </Container>
    )
}

export default BudgetTable;