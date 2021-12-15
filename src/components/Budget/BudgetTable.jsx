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

    const [actualTransportationTotal, setActualTransportationTotal] = useState(0);
    const [actualHousingTotal, setActualHousingTotal] = useState(0);
    const [actualFoodTotal, setActualFoodTotal] = useState(0);
    const [actualPersonalCareTotal, setActualPersonalCareTotal] = useState(0);
    const [actualLifestyleTotal, setActualLifestyleTotal] = useState(0);
    const [actualHealthTotal, setActualHealthTotal] = useState(0);
    const [actualInsuranceTotal, setActualInsuranceTotal] = useState(0);
    const [actualDebtTotal, setActualDebtTotal] = useState(0);
    const [actualSavingsTotal, setActualSavingsTotal] = useState(0);
    const [actualGivingTotal, setActualGivingTotal] =useState(0);

    const [budgetTransportation, setBudgetTransportation] = useState(0);
    const [budgetHousing, setBudgetHousing] = useState(0);
    const [budgetFood, setBudgetFood] = useState(0);
    const [budgetPersonalCare, setBudgetPersonalCare] = useState(0);
    const [budgetLifestyle, setBudgetLifestyle] = useState(0);
    const [budgetHealth, setBudgetHealth] = useState(0);
    const [budgetInsurance, setBudgetInsurance] = useState(0);
    const [budgetDebt, setBudgetDebt] = useState(0);
    const [budgetSavings, setBudgetSavings] = useState(0);
    const [budgetGiving, setBudgetGiving] =useState(0);

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

    const getExpenses = () => {
        fetch('http://localhost:3001/expense/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then(res => addExpenses(res))
        .catch(err => console.log(err))
    }

    const addExpenses = (res) => {
        if (res.length === 0) {
            setActualTransportationTotal(0);
            setActualHousingTotal(0);
            setActualFoodTotal(0);
            setActualPersonalCareTotal(0);
            setActualLifestyleTotal(0);
            setActualHealthTotal(0);
            setActualInsuranceTotal(0);
            setActualDebtTotal(0);
            setActualSavingsTotal(0);
            setActualGivingTotal(0);
        } else {
            let tTotal = 0;
            let hTotal = 0;
            let fTotal = 0;
            let pcTotal = 0;
            let lTotal = 0;
            let heTotal = 0;
            let inTotal = 0;
            let dTotal = 0;
            let sTotal = 0;
            let gTotal = 0;
            for (let object of res) {
                tTotal += object.Transportation;
                setActualTransportationTotal(tTotal)
                hTotal += object.Housing;
                setActualHousingTotal(hTotal)
                fTotal += object.Food;
                setActualFoodTotal(fTotal)
                pcTotal += object.PersonalCare;
                setActualPersonalCareTotal(pcTotal)
                lTotal += object.Lifestyle;
                setActualLifestyleTotal(lTotal)
                heTotal += object.Health;
                setActualHealthTotal(heTotal)
                inTotal += object.Insurance;
                setActualInsuranceTotal(inTotal)
                dTotal += object.Debt;
                setActualDebtTotal(dTotal)
                sTotal += object.Savings;
                setActualSavingsTotal(sTotal)
                gTotal += object.Giving;
                setActualGivingTotal(gTotal)
            }
        }
    }

    return (
        <Container>
            <Row>
                <h2>View Full Budget</h2>
            </Row>
            <br/>
            <br/>
            <Row>
                <Button onClick = {getIncome}>Get Actual Income Values</Button>
            </Row> 
            <br/>
            <br/>
            <Row>      
                <Col m="3">
                    <h5>Actual Income</h5>  
                    <br/>      
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
                    <h5>Budget Income</h5> 
                    <br/>       
                        <p>
                        Paychecks:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetPaycheck} onChange = {(e) => setBudgetPaycheck(e.target.value)}></input>
                        </p>
                        <p>
                        Investments:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetInvestment} onChange = {(e) => setBudgetInvestment(e.target.value)}></input>
                        </p>
                        <p>
                        Reimbursements:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetReimbursement} onChange = {(e) => setBudgetReimbursement(e.target.value)}></input>
                        </p>
                        <p>
                        Misc:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetMisc} onChange = {(e) => setBudgetMisc(e.target.value)}></input>
                        </p>
                </Col>
                <Col m="3">
                    <h5>Budget-to-Actuals</h5> 
                    <br/>       
                        <p>
                        Paychecks:
                        </p>
                        <p>
                        {budgetPaycheck - actualPaycheckTotal}
                        </p>
                        <p>
                        Investments:
                        </p>
                        <p>
                        {budgetInvestment - actualInvestmentTotal}
                        </p>
                        <p>
                        Reimbursements:
                        </p>
                        <p>
                        {budgetReimbursement - actualReimbursementTotal}
                        </p>
                        <p>
                        Misc:
                        </p>
                        <p>
                        {budgetMisc - actualMiscTotal}
                        </p>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Button onClick = {getExpenses}>Get Actual Expense Values</Button>
            </Row> 
            <br/>
            <br/>
            <Row>      
                <Col m="3">
                    <h5>Actual Expenses</h5> 
                    <br/>       
                        <p>
                        Transportation:
                        </p>
                        <p>
                        {actualTransportationTotal}
                        </p>
                        <p>
                        Housing:
                        </p>
                        <p>
                        {actualHousingTotal}
                        </p>
                        <p>
                        Food:
                        </p>
                        <p>
                        {actualFoodTotal}
                        </p>
                        <p>
                        Personal Care:
                        </p>
                        <p>
                        {actualPersonalCareTotal}
                        </p>
                        <p>
                        Lifestyle:
                        </p>
                        <p>
                        {actualLifestyleTotal}
                        </p>
                        <p>
                        Health:
                        </p>
                        <p>
                        {actualHealthTotal}
                        </p>
                        <p>
                        Insurance:
                        </p>
                        <p>
                        {actualInsuranceTotal}
                        </p>
                        <p>
                        Debt:
                        </p>
                        <p>
                        {actualDebtTotal}
                        </p>
                        <p>
                        Savings:
                        </p>
                        <p>
                        {actualSavingsTotal}
                        </p>
                        <p>
                        Giving:
                        </p>
                        <p>
                        {actualGivingTotal}
                        </p>
                </Col>
                <Col m="3">
                    <h5>Budget Expenses</h5>  
                    <br/>      
                        <p>
                        Transportation:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetTransportation} onChange = {(e) => setBudgetTransportation(e.target.value)}></input>
                        </p>
                        <p>
                        Housing:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetHousing} onChange = {(e) => setBudgetHousing(e.target.value)}></input>
                        </p>
                        <p>
                        Food:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetFood} onChange = {(e) => setBudgetFood(e.target.value)}></input>
                        </p>
                        <p>
                        Personal Care:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetPersonalCare
                        } onChange = {(e) => setBudgetPersonalCare(e.target.value)}></input>
                        </p>
                        <p>
                        Lifestyle:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetLifestyle} onChange = {(e) => setBudgetLifestyle(e.target.value)}></input>
                        </p>
                        <p>
                        Health:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetHealth} onChange = {(e) => setBudgetHealth(e.target.value)}></input>
                        </p>
                        <p>
                        Insurance:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetInsurance} onChange = {(e) => setBudgetInsurance(e.target.value)}></input>
                        </p>
                        <p>
                        Debt:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetDebt} onChange = {(e) => setBudgetDebt(e.target.value)}></input>
                        </p>
                        <p>
                        Savings:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetSavings} onChange = {(e) => setBudgetSavings(e.target.value)}></input>
                        </p>
                        <p>
                        Giving:
                        </p>
                        <p>
                        <input type = 'text' value = {budgetGiving} onChange = {(e) => setBudgetGiving(e.target.value)}></input>
                        </p>
                </Col>
                <Col m="3">
                    <h5>Budget-to-Actuals</h5> 
                    <br/>       
                        <p>
                        Transportation:
                        </p>
                        <p>
                        {budgetTransportation - actualTransportationTotal}
                        </p>
                        <p>
                        Housing:
                        </p>
                        <p>
                        {budgetHousing - actualHousingTotal}
                        </p>
                        <p>
                        Food:
                        </p>
                        <p>
                        {budgetFood - actualFoodTotal}
                        </p>
                        <p>
                        Personal Care:
                        </p>
                        <p>
                        {budgetPersonalCare - actualPersonalCareTotal}
                        </p>
                        <p>
                        Lifestyle:
                        </p>
                        <p>
                        {budgetLifestyle - actualLifestyleTotal}
                        </p>
                        <p>
                        Health:
                        </p>
                        <p>
                        {budgetHealth - actualHealthTotal}
                        </p>
                        <p>
                        Insurance:
                        </p>
                        <p>
                        {budgetInsurance - actualInsuranceTotal}
                        </p>
                        <p>
                        Debt:
                        </p>
                        <p>
                        {budgetDebt - actualDebtTotal}
                        </p>
                        <p>
                        Savings:
                        </p>
                        <p>
                        {budgetSavings - actualSavingsTotal}
                        </p>
                        <p>
                        Giving:
                        </p>
                        <p>
                        {budgetGiving - actualGivingTotal}
                        </p>
                </Col>
            </Row>
        </Container>
    )
}

export default BudgetTable;