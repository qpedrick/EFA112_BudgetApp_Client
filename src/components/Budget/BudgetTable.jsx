import React, {useState, useEffect} from 'react';
import {Table, Button, Container, Row, Col} from 'reactstrap';


const BudgetTable = (props) => {
    const [actualPaycheckTotal, setActualPaycheckTotal] = useState(0);
    const [actualInvestmentTotal, setActualInvestmentTotal] = useState(0);
    const [actualReimbursementTotal, setActualReimbursementTotal] = useState(0);
    const [actualMiscTotal, setActualMiscTotal] = useState(0);
    const [budgetPaycheck, setBudgetPaycheck] = useState(0);
    const [budgetInvestment, setBudgetInvestment] = useState(0);
    const [budgetReimbursement, setBudgetReimbursement] = useState(0);
    const [budgetMisc, setBudgetMisc] = useState(0);

    const getIncome = () => {
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        // .then(res => setActualValues(res))
        .then(res => addIncome(res))
        .catch(err => console.log(err))
    }

    const addIncome = (res) => {
        if (res.length === 0) {
            setActualPaycheckTotal(0);
            setActualInvestmentTotal(0);
            setActualReimbursementTotal(0);
            setActualMiscTotal(0);
        } else {
        let pTotal = 0;
        let iTotal = 0;
        let rTotal = 0;
        let mTotal = 0;
        for (let object of res) {
            pTotal += object.Paychecks;
            setActualPaycheckTotal(pTotal)
            iTotal += object.Investments;
            setActualInvestmentTotal(iTotal)
            rTotal += object.Reimbursements;
            setActualReimbursementTotal(rTotal)
            mTotal += object.Misc;
            setActualMiscTotal(mTotal)
        }
    }
}


    return(
        <Container>
            <Row>
                <h3>View Full Budget</h3>
                <Button onClick = {getIncome}>Get Actual Income values</Button>
            </Row> 
            <Row>      
                <Col m="3">
                    <h5>Actual Income Values</h5>        
                        <p>
                        Paychecks:
                        </p>
                        <p>
                        {actualPaycheckTotal}
                        </p>
                        <p>
                        Investments:
                        </p>
                        <p>
                        {actualInvestmentTotal}
                        </p>
                        <p>
                        Reimbursements:
                        </p>
                        <p>
                        {actualReimbursementTotal}
                        </p>
                        <p>
                        Misc:
                        </p>
                        <p>
                        {actualMiscTotal}
                        </p>
                </Col>
                <Col m="3">
                    <h5>Budget Income Values</h5>        
                        <p>
                        Paychecks:
                        </p>
                        <input type = 'text' value = {budgetPaycheck} onChange = {(e) => setBudgetPaycheck(e.target.value)}></input>
                        <p>
                        Investments:
                        </p>
                        <input type = 'text' value = {budgetInvestment} onChange = {(e) => setBudgetInvestment(e.target.value)}></input>
                        <p>
                        Reimbursements:
                        </p>
                        <input type = 'text' value = {budgetReimbursement} onChange = {(e) => setBudgetReimbursement(e.target.value)}></input>
                        <p>
                        Misc:
                        </p>
                        <input type = 'text' value = {budgetMisc} onChange = {(e) => setBudgetMisc(e.target.value)}></input>
                </Col>
                <Col m="3">
                    <h5>Difference between Budget and Actual</h5>        
                        <p>
                        Paychecks:
                        </p>
                        {budgetPaycheck - actualPaycheckTotal}
                        <p>
                        Investments:
                        </p>
                        {budgetInvestment - actualInvestmentTotal}
                        <p>
                        Reimbursements:
                        </p>
                        {budgetReimbursement - actualReimbursementTotal}
                        <p>
                        Misc:
                        </p>
                        {budgetMisc - actualMiscTotal}
                </Col>
            </Row>
        </Container>
    )
}

export default BudgetTable;