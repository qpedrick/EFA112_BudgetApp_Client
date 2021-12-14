import React, {useState, useEffect} from 'react';
import IncomeCreate from './IncomeCreate';
import IncomeEdit from './IncomeEdit';
import IncomeTable from './IncomeTable';
import {Container, Row, Col} from 'reactstrap';

const IncomeIndex = (props) => {

    const [income, setIncome] = useState([]);

    const fetchIncome = () =>
        fetch('http://localhost:6000/income/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setIncome(logData)
        })

        useEffect(() => {
            fetchIncome();
        }, [])

        return(
            <Container>
                <Row>
                    <Col m="3">
                        Income Create
                    </Col>
                    <Col>
                        Income Table
                    </Col>
                </Row>
            </Container>
        )
}

export default IncomeIndex;