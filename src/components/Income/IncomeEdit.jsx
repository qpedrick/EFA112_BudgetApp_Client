import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const IncomeEdit = (props) => {
    const [editPaychecks, setEditPaychecks] = useState(props.incomeBudgetToUpdate.paychecks);
    const [editInvestments, setEditInvestments] = useState(props.incomeBudgetToUpdate.investments);
    const [editReimbursements, setEditReimbursements] = useState(props.incomeBudgetToUpdate.reimbursements);
    const [editMisc, setEditMisc] = useState(props.incomeBudgetToUpdate.misc);

    const incomeUpdate = (event, incomeBudget) => {
        event.preventDefault();
        fetch(`http://localhost:3001/income/${props.incomeBudgetToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({income: {paychecks: editPaychecks, investments: editInvestments, reimbursements: editReimbursements, misc: editMisc}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchIncome();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Update a Workout</ModalHeader>
            <ModalBody>
                <Form onSubmit={incomeUpdate}>
                    <FormGroup>
                        <Label htmlFor="paychecks">Edit Paychecks:</Label>
                        <Input name="paychecks" value={editPaychecks} onChange={(event) => setEditPaychecks(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="investments">Edit Investments:</Label>
                        <Input name="investments" value={editInvestments} onChange={(event) => setEditInvestments(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="reimbursements">Edit Reimbursements:</Label>
                        <Input name="reimbursements" value={editReimbursements} onChange={(event) => setEditReimbursements(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="misc">Edit Misc:</Label>
                        <Input name="misc" value={editMisc} onChange={(event) => setEditMisc(event.target.value)}/>
                    </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
            </ModalBody>
        </Modal>
    )
}

export default IncomeEdit;