import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ExpenseEdit = (props) => {
    const [editTransportation, setEditTransportation] = useState('');
    const [editHousing, setEditHousing] = useState('');
    const [editFood, setEditFood] = useState('');
    const [editPersonalCare, setEditPersonalCare] = useState('');
    const [editLifestyle, setEditLifestyle] = useState('');
    const [editHealth, setEditHealth] = useState('');
    const [editInsurance, setEditInsurance] = useState('');
    const [editDebt, setEditDebt] = useState('');
    const [editSavings, setEditSavings] = useState('');
    const [editGiving, setEditGiving] = useState('');
    
    const expenseUpdate = (e, expense) => {
        e.preventDefault();
        fetch(`http://localhost:3001/expense/${props.expenseToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({expense:
            {
                transportation: editTransportation,
                housing: editHousing,
                food: editFood,
                personalCare: editPersonalCare,
                lifestyle: editLifestyle,
                health: editHealth,
                insurance: editInsurance,
                debt: editDebt,
                savings: editSavings,
                giving: editGiving
            }}),
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

    return(
        <Modal isOpen = {true}>
            <ModalHeader>Log an Expense</ModalHeader>
            <ModalBody>
                <Form onSubmit={expenseUpdate}>
                    <FormGroup>
                        <Label htmlFor = 'transportation' />
                        <Input name = 'transportation' value = {editTransportation} onChange={(e) => setEditTransportation(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'housing' />
                        <Input name = 'housing' value = {editHousing} onChange={(e) => setEditHousing(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'food' />
                        <Input name = 'food' value = {editFood} onChange={(e) => setEditFood(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'personalCare' />
                        <Input name = 'personalCare' value = {editPersonalCare} onChange={(e) => setEditPersonalCare(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'lifestyle' />
                        <Input name = 'lifetstyle' value = {editLifestyle} onChange={(e) => setEditLifestyle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'health' />
                        <Input name = 'health' value = {editHealth} onChange={(e) => setEditHealth(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'insurance' />
                        <Input name = 'insurance' value = {editInsurance} onChange={(e) => setEditInsurance(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'debt' />
                        <Input name = 'debt' value = {editDebt} onChange={(e) => setEditDebt(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'savings' />
                        <Input name = 'savings' value = {editSavings} onChange={(e) => setEditSavings(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'giving' />
                        <Input name = 'giving' value = {editGiving} onChange={(e) => setEditGiving(e.target.value)} />
                    </FormGroup>
                    <Button type = 'submit'>Submit Expense Report</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ExpenseEdit;