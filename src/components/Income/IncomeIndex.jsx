import React, { useState, useEffect } from 'react';
import IncomeCreate from './IncomeCreate';
import IncomeEdit from './IncomeEdit';
import IncomeTable from './IncomeTable';
import { Container, Row, Col } from 'reactstrap';

const IncomeIndex = (props) => {

    const [incomeBudgets, setIncomeBudgets] = useState([]);
    const [updateIncomeBudget, setUpdateIncomeBudget] = useState(false);
    const [incomeBudgetToUpdate, setIncomeBudgetToUpdate] = useState({});

    const fetchIncomes = () => {
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then((incomeData) => {
            console.log(incomeData)
            setIncomeBudgets(incomeData)
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
            fetchIncomes();
        }, [])

        return(
            <Container>
                <Row>
                    <Col m='3'>
                        <IncomeCreate fetchIncomes={fetchIncomes} token={props.token}/>
                    </Col>
                    <Col md='9'>
                        <IncomeTable incomeBudgets={incomeBudgets} editUpdateIncomeBudget={editUpdateIncomeBudget} updateOn={updateOn} fetchIncomes={fetchIncomes} token={props.token}/>
                    </Col>
                    {updateIncomeBudget ? <IncomeEdit incomeBudgetToUpdate={incomeBudgetToUpdate} updateOff={updateOff} token={props.token} fetchIncomes={fetchIncomes}/> : <> </>}
                </Row>
            </Container>
        )
}

export default IncomeIndex;