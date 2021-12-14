import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ExpenseCreate = (props) => {
    const [transportation, setTransportation] = useState('');
    const [housing, setHousing] = useState('');
    const [food, setFood] = useState('');
    const [personalCare, setPersonalCare] = useState('');
    const [lifestyle, setLifestyle] = useState('');
    const [health, setHealth] = useState('');
    const [insurance, setInsurance] = useState('');
    const [debt, setDebt] = useState('');
    const [savings, setSavings] = useState('');
    const [giving, setGiving] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/expense/`, {
            method: 'POST',
            body: JSON.stringify({expense:
            {
                transportation: transportation,
                housing: housing,
                food: food,
                personalCare: personalCare,
                lifestyle: lifestyle,
                health: health,
                insurance: insurance,
                debt: debt,
                savings: savings,
                giving: giving
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${props.token}`
            })
        })
        .then((res) => res.json())
        .then((json) => {
            //console.log(json)
            setTransportation('');
            setHousing('');
            setFood('');
            setPersonalCare('');
            setLifestyle('');
            setHealth('');
            setInsurance('');
            setDebt('');
            setSavings('');
            setGiving('');
        })
        .catch(err => console.log(err))
    }

    return(
        <>
        <h3>Log an Expense</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor = 'transportation' />
                <Input name = 'transportation' value = {transportation} onChange={(e) => setTransportation(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'housing' />
                <Input name = 'housing' value = {housing} onChange={(e) => setHousing(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'food' />
                <Input name = 'food' value = {food} onChange={(e) => setFood(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'personalCare' />
                <Input name = 'personalCare' value = {personalCare} onChange={(e) => setPersonalCare(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'lifestyle' />
                <Input name = 'lifetstyle' value = {lifestyle} onChange={(e) => setLifestyle(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'health' />
                <Input name = 'health' value = {health} onChange={(e) => setHealth(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'insurance' />
                <Input name = 'insurance' value = {insurance} onChange={(e) => setInsurance(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'debt' />
                <Input name = 'debt' value = {debt} onChange={(e) => setDebt(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'savings' />
                <Input name = 'savings' value = {savings} onChange={(e) => setSavings(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor = 'giving' />
                <Input name = 'giving' value = {giving} onChange={(e) => setGiving(e.target.value)} />
            </FormGroup>
            <Button type = 'submit'>Submit Expense Report</Button>
        </Form>
        </>
    )
}

export default ExpenseCreate;