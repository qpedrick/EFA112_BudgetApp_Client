import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const IncomeCreate = (props) => {
    const [paychecks, setPaychecks] = useState('');
    const [investments, setInvestments] = useState('');
    const [reimbursements, setReimbursements] = useState('');
    const [misc, setMisc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/income/', {
            method: 'POST',
            body: JSON.stringify({income: {paychecks: paychecks, investments: investments, reimbursements: reimbursements, misc: misc}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setPaychecks('');
            setInvestments('');
            setReimbursements('');
            setMisc('');
            props.fetchIncome();
        })
    }

    return (
        <>
        <h2>Set Budget</h2>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="paychecks"/>
                <Input name="paychecks" value={paychecks} onChange={(event) => setPaychecks(event.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="investments"/>
                <Input name="investments" value={investments} onChange={(event) => setInvestments(event.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="reimbursements"/>
                <Input name="reimbursements" value={reimbursements} onChange={(event) => setReimbursements(event.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="misc"/>
                <Input name="misc" value={misc} onChange={(event) => setMisc(event.target.value)}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </>
    )

}

export default IncomeCreate;