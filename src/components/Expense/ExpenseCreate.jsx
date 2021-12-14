import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        fetch('http://localhost:3001/expense/create', {
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
        <h3>Log an Expense</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor = 'transportation' />
                <Input name = 'transportation' value = {transportation} onChange={(e) => setTransportation(e.target.value)} placeholder = 'transportation' />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'housing' />
                <Input name = 'housing' value = {housing} onChange={(e) => setHousing(e.target.value)} placeholder='housing'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'food' />
                <Input name = 'food' value = {food} onChange={(e) => setFood(e.target.value)} placeholder='food'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'personalCare' />
                <Input name = 'personalCare' value = {personalCare} onChange={(e) => setPersonalCare(e.target.value)} placeholder='personal care'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'lifestyle' />
                <Input name = 'lifetstyle' value = {lifestyle} onChange={(e) => setLifestyle(e.target.value)} placeholder='lifestyle' />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'health' />
                <Input name = 'health' value = {health} onChange={(e) => setHealth(e.target.value)} placeholder = 'health' />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'insurance' />
                <Input name = 'insurance' value = {insurance} onChange={(e) => setInsurance(e.target.value)} placeholder='insurance'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'debt' />
                <Input name = 'debt' value = {debt} onChange={(e) => setDebt(e.target.value)} placeholder='debt'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'savings' />
                <Input name = 'savings' value = {savings} onChange={(e) => setSavings(e.target.value)} placeholder='savings'/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'giving' />
                <Input name = 'giving' value = {giving} onChange={(e) => setGiving(e.target.value)} placeholder='giving'/>
            </FormGroup>
            <Button type = 'submit'>Submit Expense Report</Button>
        </Form>
        </>
    )
}

export default ExpenseCreate;