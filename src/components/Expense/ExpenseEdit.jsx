import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

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
        fetch(`http://localhost:3001/expense/${props.expenseToUpdate.id}`, {
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

    return(
        <Modal isOpen = {true}>
            <ModalHeader>Log an Expense</ModalHeader>
                <ModalBody>
                    <Form onSubmit={expenseUpdate}>
                    <FormGroup>
                        <Label htmlFor = 'transportation' />
                        <Input name = 'transportation' value = {editTransportation} onChange={(e) => setEditTransportation(e.target.value)} placeholder = 'transportation' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'housing' />
                        <Input name = 'housing' value = {editHousing} onChange={(e) => setEditHousing(e.target.value)} placeholder='housing'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'food' />
                        <Input name = 'food' value = {editFood} onChange={(e) => setEditFood(e.target.value)} placeholder='food'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'personalCare' />
                        <Input name = 'personalCare' value = {editPersonalCare} onChange={(e) => setEditPersonalCare(e.target.value)} placeholder='personal care'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'lifestyle' />
                        <Input name = 'lifetstyle' value = {editLifestyle} onChange={(e) => setEditLifestyle(e.target.value)} placeholder='lifestyle' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'health' />
                        <Input name = 'health' value = {editHealth} onChange={(e) => setEditHealth(e.target.value)} placeholder = 'health' />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'insurance' />
                        <Input name = 'insurance' value = {editInsurance} onChange={(e) => setEditInsurance(e.target.value)} placeholder='insurance'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'debt' />
                        <Input name = 'debt' value = {editDebt} onChange={(e) => setEditDebt(e.target.value)} placeholder='debt'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'savings' />
                        <Input name = 'savings' value = {editSavings} onChange={(e) => setEditSavings(e.target.value)} placeholder='savings'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = 'giving' />
                        <Input name = 'giving' value = {editGiving} onChange={(e) => setEditGiving(e.target.value)} placeholder='giving'/>
                    </FormGroup>
                    <Button type = 'submit' outline color="dark">Submit Expense Report</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ExpenseEdit;