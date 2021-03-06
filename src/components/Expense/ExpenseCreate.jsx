import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';

const ExpenseCreate = (props) => {
    const [transportation, setTransportation] = useState(0);
    const [housing, setHousing] = useState(0);
    const [food, setFood] = useState(0);
    const [personalCare, setPersonalCare] = useState(0);
    const [lifestyle, setLifestyle] = useState(0);
    const [health, setHealth] = useState(0);
    const [insurance, setInsurance] = useState(0);
    const [debt, setDebt] = useState(0);
    const [savings, setSavings] = useState(0);
    const [giving, setGiving] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/expense/create`, {

            method: 'POST',
            body: JSON.stringify(
            {
                Transportation: transportation,
                Housing: housing,
                Food: food,
                PersonalCare: personalCare,
                Lifestyle: lifestyle,
                Health: health,
                Insurance: insurance,
                Debt: debt,
                Savings: savings,
                Giving: giving
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${props.token}`
            })
        })

        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then(() => {
            setTransportation(0);
            setHousing(0);
            setFood(0);
            setPersonalCare(0);
            setLifestyle(0);
            setHealth(0);
            setInsurance(0);
            setDebt(0);
            setSavings(0);
            setGiving(0);
            props.fetchExpenses()

        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <h3>Log Expenses</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor = 'transportation' />
                <p>Enter transportation expenses:</p>
                <Input name = 'transportation' value = {transportation} onChange={(e) => setTransportation(e.target.value)} placeholder = 'Transportation' />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'housing' />
                <p>Enter housing expenses:</p>
                <Input name = 'housing' value = {housing} onChange={(e) => setHousing(e.target.value)} placeholder='Housing'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'food' />
                <p>Enter food expenses:</p>
                <Input name = 'food' value = {food} onChange={(e) => setFood(e.target.value)} placeholder='Food'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'personalCare' />
                <p>Enter personal care expenses:</p>
                <Input name = 'personalCare' value = {personalCare} onChange={(e) => setPersonalCare(e.target.value)} placeholder='Personal Care'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'lifestyle' />
                <p>Enter lifestyle expenses:</p>
                <Input name = 'lifetstyle' value = {lifestyle} onChange={(e) => setLifestyle(e.target.value)} placeholder='Lifestyle' />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'health' />
                <p>Enter health expenses:</p>
                <Input name = 'health' value = {health} onChange={(e) => setHealth(e.target.value)} placeholder = 'Health' />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'insurance' />
                <p>Enter insurance expenses:</p>
                <Input name = 'insurance' value = {insurance} onChange={(e) => setInsurance(e.target.value)} placeholder='Insurance'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'debt' />
                <p>Enter debt payments:</p>
                <Input name = 'debt' value = {debt} onChange={(e) => setDebt(e.target.value)} placeholder='Debt'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'savings' />
                <p>Enter funds transferred to savings:</p>
                <Input name = 'savings' value = {savings} onChange={(e) => setSavings(e.target.value)} placeholder='Savings'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'giving' />
                <p>Enter giving expenses:</p>
                <Input name = 'giving' value = {giving} onChange={(e) => setGiving(e.target.value)} placeholder='Giving'/>
            </FormGroup>
            <Button color="dark" type = 'submit'>Submit Expense Report</Button>
        </Form>
        </>
    )
}

export default ExpenseCreate;