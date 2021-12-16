import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';

const IncomeEdit = (props) => {
    const [editPaychecks, setEditPaychecks] = useState(props.incomeBudgetToUpdate.paychecks);
    const [editInvestments, setEditInvestments] = useState(props.incomeBudgetToUpdate.investments);
    const [editReimbursements, setEditReimbursements] = useState(props.incomeBudgetToUpdate.reimbursements);
    const [editMisc, setEditMisc] = useState(props.incomeBudgetToUpdate.misc);

    const incomeUpdate = (event, incomeBudget) => {
        event.preventDefault();
        fetch(`${APIURL}/income/${props.incomeBudgetToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ Paychecks: editPaychecks, Investments: editInvestments, Reimbursements: editReimbursements, Misc: editMisc }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchIncomes();
            props.updateOff();
        })
    }
    const leaveModal = () => {
        props.updateOff();
    }
    return (
        <Modal isOpen={true}>
            <ModalHeader>
            <Row md="12">
                    <Col md='auto'>
                    Update Income
                    </Col>
                    <Col md='auto'>
                        <Button outline color="dark" onClick={leaveModal} className="exit">X</Button>
                    </Col>
                </Row>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={incomeUpdate}>
                    <FormGroup>
                        <Label htmlFor="paychecks">Edit Paychecks:</Label>
                        <Input name="paychecks" value={editPaychecks} onChange={(event) => setEditPaychecks(event.target.value)} placeholder="Paychecks" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="investments">Edit Investments:</Label>
                        <Input name="investments" value={editInvestments} onChange={(event) => setEditInvestments(event.target.value)} placeholder="Investments" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="reimbursements">Edit Reimbursements:</Label>
                        <Input name="reimbursements" value={editReimbursements} onChange={(event) => setEditReimbursements(event.target.value)} placeholder="Reimbursements" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="misc">Edit Misc:</Label>
                        <Input name="misc" value={editMisc} onChange={(event) => setEditMisc(event.target.value)} placeholder="Misc" />
                    </FormGroup>
                    <Button color="dark" type="submit">Submit Updated Income</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default IncomeEdit;