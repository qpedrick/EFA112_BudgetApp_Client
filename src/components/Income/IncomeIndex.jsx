import React, {useState, useEffect} from 'react';
import IncomeCreate from './IncomeCreate';
import IncomeEdit from './IncomeEdit';
import IncomeTable from './IncomeTable';
import {Container, Row, Col} from 'reactstrap';

const IncomeIndex = (props) => {

    const [incomeBudget, setIncomeBudget] = useState([]);
    const [updateIncomeBudget, setUpdateIncomeBudget] = useState(false);
    const [incomeBudgetToUpdate, setIncomeBudgetToUpdate] = useState([]);

    const fetchIncome = () => {
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setIncomeBudget(logData)
        })
    }

        const editUpdateIncomeBudget = (incomeBudget) => {
            setIncomeBudgetToUpdate(incomeBudget);
            console.log(incomeBudget);
        }

        const updateOn = () => {
            setUpdateIncomeBudget(true);
        }

        const updateOff = () => {
            setUpdateIncomeBudget(false);
        }

        useEffect(() => {
            fetchIncome();
        }, [])

        return(
            <Container>
                <Row>
                    <Col m="3">
                        <IncomeCreate fetchIncome={fetchIncome} token={props.token}/>
                    </Col>
                    <Col md="3">
                        <IncomeTable incomeBudget={incomeBudget} editUpdateIncomeBudget={editUpdateIncomeBudget} updateOn={updateOn} fetchIncome={fetchIncome} token={props.token}/>
                    </Col>
                    {updateIncomeBudget ? <IncomeEdit incomeBudgetToUpdate={incomeBudgetToUpdate} updateOff={updateOff} token={props.token} fetchIncome={fetchIncome}/> : <> </>}
                </Row>
            </Container>
        )
}

export default IncomeIndex;