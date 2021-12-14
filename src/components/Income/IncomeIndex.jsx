import React, {useState, useEffect} from 'react';
//import IncomeCreate from './IncomeCreate';
//import IncomeEdit from './IncomeEdit';
import IncomeTable from './IncomeTable';
import {Container, Row, Col} from 'reactstrap';

const IncomeIndex = (props) => {

    const [incomes, setIncomes] = useState([]);

    const fetchIncomes = () =>
        fetch('http://localhost:3001/income/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then( (res) => res.json())
        .then((incomeData) => {
            setIncomes(incomeData)
        })

        useEffect(() => {
            fetchIncomes();
        }, [])

        return(
            <Container>
                <Row>
                    <Col m="3">
                        Income Create
                    </Col>
                    <Col>
                        <IncomeTable incomes = {incomes} fetchIncomes = {fetchIncomes} token = {props.token}/>
                    </Col>
                </Row>
            </Container>
        )
}

export default IncomeIndex;