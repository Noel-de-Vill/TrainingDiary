import React, {useContext, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {AUTHSPORTSMAN_ROUTE, AUTHTRAINER_ROUTE, DIARY_ROUTE} from "../utils/consts";
import {useHistory, useLocation} from "react-router-dom";

import Background from "../images/bg.jpg"
import NavBar from "../components/NavBar";
import {createInfoTrainer} from "../http/infoAPI";
import {login, registration} from "../http/userAPI";


const AuthTrainer = observer(() => {

    const {info: infoTrainer} = useContext(Context)

    const history = useHistory()
    const location = useLocation()

    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [middlename, setMiddlename] = useState('')

    const [validated, setValidated] = useState(false);

    const email = location.state.email



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const click = async () => {

            let data

            data = await createInfoTrainer(surname, name, middlename, location.state.idtrainer)

            infoTrainer.setInfoTrainer(infoTrainer)

            history.push(DIARY_ROUTE)

    }


        return (
        <div style={{background: `url(${Background})`, backgroundSize: 'cover', minHeight: window.innerHeight, backgroundAttachment:"fixed"}}>
            <div>.</div>
            <Container className="p-5 mt-5" style={{margin: "auto", background: "rgba(0,0,0,0.5)", color: "orange", borderRadius: 20}}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder={ email }
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Фамилия"
                                onChange={e => setSurname(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Имя"
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Отчество</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Отчество"
                                onChange={e => setMiddlename(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Button className="mt-3" onClick={click} variant={"outline-warning"}>Submit form</Button>
                </Form>
            </Container>
        </div>
    );
});

export default AuthTrainer;