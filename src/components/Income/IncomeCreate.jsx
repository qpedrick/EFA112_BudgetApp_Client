import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const IncomeCreate = (props) => {
    const [paychecks, setPaychecks] = useState(0);
    const [investments, setInvestments] = useState(0);
    const [reimbursements, setReimbursements] = useState(0);
    const [misc, setMisc] = useState(0);

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

    return (
        <>
        <h2>Set Budget</h2>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="paychecks"/>
                <Input name="paychecks" value={paychecks} placeholder="Enter paycheck income" onChange={(e) => setPaychecks(e.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="investments"/>
                <Input name="investments" value={investments} placeholder="Enter investments income" onChange={(e) => setInvestments(e.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="reimbursements"/>
                <Input name="reimbursements" value={reimbursements} placeholder="Enter reimbursements income" onChange={(e) => setReimbursements(e.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="misc"/>
                <Input name="misc" value={misc} placeholder="Enter miscellaneous income" onChange={(e) => setMisc(e.target.value)}/>
            </FormGroup>
            <Button type="submit" >Submit</Button>
        </Form>
        </>
    )
}

export default IncomeCreate;