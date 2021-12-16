import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import './Expense.css'
import APIURL from '../../helpers/environment';

const ExpenseEdit = (props) => {
    const [editTransportation, setEditTransportation] = useState(props.expenseToUpdate.Transportation);
    const [editHousing, setEditHousing] = useState(props.expenseToUpdate.Housing);
    const [editFood, setEditFood] = useState(props.expenseToUpdate.Food);
    const [editPersonalCare, setEditPersonalCare] = useState(props.expenseToUpdate.PersonalCare);
    const [editLifestyle, setEditLifestyle] = useState(props.expenseToUpdate.Lifestyle);
    const [editHealth, setEditHealth] = useState(props.expenseToUpdate.Health);
    const [editInsurance, setEditInsurance] = useState(props.expenseToUpdate.Insurance);
    const [editDebt, setEditDebt] = useState(props.expenseToUpdate.Debt);
    const [editSavings, setEditSavings] = useState(props.expenseToUpdate.Savings);
    const [editGiving, setEditGiving] = useState(props.expenseToUpdate.Giving);

    const expenseUpdate = (e, expense) => {
        e.preventDefault();
        fetch(`${APIURL}/expense/${props.expenseToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                {
                    Transportation: editTransportation,
                    Housing: editHousing,
                    Food: editFood,
                    PersonalCare: editPersonalCare,
                    Lifestyle: editLifestyle,
                    Health: editHealth,
                    Insurance: editInsurance,
                    Debt: editDebt,
                    Savings: editSavings,
                    Giving: editGiving
                }),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${props.token}`
            })
        })
            .then((res) => {
                //console.log(res)
                props.fetchExpenses();
                props.updateOff();
            })
            .catch(err => console.log(err))
    }
    const leaveModal = () => {
        props.updateOff();
    }

    return (
        <Modal isOpen={true}>

            <ModalHeader>
                <Row md="12">
                    <Col md='auto'>
                        Log an Expense
                    </Col>
                    <Col md='auto'>
                        <Button outline color="dark" onClick={leaveModal} className="exit">X</Button>
                    </Col>
                </Row>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={expenseUpdate}>
                    <FormGroup>
                        <Label htmlFor='transportation'>Edit Transportation:</Label>
                        <Input name='transportation' value={editTransportation} onChange={(e) => setEditTransportation(e.target.value)} placeholder='Transportation' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='housing'>Edit Housing:</Label>
                        <Input name='housing' value={editHousing} onChange={(e) => setEditHousing(e.target.value)} placeholder='Housing' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='food'>Edit Food:</Label>
                        <Input name='food' value={editFood} onChange={(e) => setEditFood(e.target.value)} placeholder='Food' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='personalCare'>Edit Personal Care:</Label>
                        <Input name='personalCare' value={editPersonalCare} onChange={(e) => setEditPersonalCare(e.target.value)} placeholder='Personal Care' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='lifestyle'>Edit Lifestyle:</Label>
                        <Input name='lifetstyle' value={editLifestyle} onChange={(e) => setEditLifestyle(e.target.value)} placeholder='Lifestyle' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='health'>Edit Health:</Label>
                        <Input name='health' value={editHealth} onChange={(e) => setEditHealth(e.target.value)} placeholder='Health' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='insurance'>Edit Insurance:</Label>
                        <Input name='insurance' value={editInsurance} onChange={(e) => setEditInsurance(e.target.value)} placeholder='Insurance' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='debt'>Edit Debt:</Label>
                        <Input name='debt' value={editDebt} onChange={(e) => setEditDebt(e.target.value)} placeholder='Debt' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='savings'>Edit Savings:</Label>
                        <Input name='savings' value={editSavings} onChange={(e) => setEditSavings(e.target.value)} placeholder='Savings' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='giving'>Edit Giving:</Label>
                        <Input name='giving' value={editGiving} onChange={(e) => setEditGiving(e.target.value)} placeholder='Giving' />
                    </FormGroup>
                    <Button color="dark" type='submit'>Submit Expense Report</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ExpenseEdit;