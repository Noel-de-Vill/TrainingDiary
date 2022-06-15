import React, {useContext, useEffect, useState} from 'react';
import {Accordion, Button, Card, Col, Container, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {createInfoSportsman, createInfoTrainer, fetchInfoTrainer, fetchSporttype} from "../http/infoAPI";
import CycleItem from "../components/CycleItem";
import * as PropTypes from "prop-types";
import {observer} from "mobx-react-lite";

import Background from "../images/bg.jpg"
import {useHistory, useLocation} from "react-router-dom";
import {DIARY_ROUTE} from "../utils/consts";

const genders = ['male', 'female']

function CustomToggle(props) {
    return null;
}

CustomToggle.propTypes = {
    eventKey: PropTypes.string,
    children: PropTypes.node
};
const AuthSportsman = observer(() => {

    const {info: infoSportsman} = useContext(Context)
    //const {sportsman} = useContext(Context)
    const location = useLocation()

    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [gender, setGender] = useState('')
    const [birthdate, setBirthdate] = useState('')

    const [validated, setValidated] = useState(false);

    const email = location.state.email
    const history = useHistory()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    useEffect(() => {
        fetchInfoTrainer().then(data => infoSportsman.setInfoTrainer(data))
        fetchSporttype().then(data => infoSportsman.setSporttype(data))
    }, [])


    const click = async () => {
        let data

        data = await createInfoSportsman(surname, name, middlename, height, gender, birthdate, weight, infoSportsman.selectedTrainer.id, infoSportsman.selectedSporttype.id, location.state.idsportsman)

        infoSportsman.setInfoSportsman(infoSportsman)

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
                                placeholder= { email }
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
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Имя"
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
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
                    <Row className="mb-4">
                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                            <Form.Label>Рост</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Рост"
                                required
                                onChange={e => setHeight(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Вес</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Вес"
                                required
                                onChange={e => setWeight(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Дата рождения</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Дата рождения"
                                required
                                onChange={e => setBirthdate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom06">
                            <Form.Label>Пол</Form.Label>
                            {genders.map(f => (
                                <>
                                    <input className="ml-3"
                                           type="radio"
                                           name="gender"
                                           value={f}
                                           checked={gender === f}
                                           onChange={e => setGender(e.target.value)}
                                           key = {f}
                                    />{" "}
                                    {f}
                                </>
                            ))}
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <Dropdown as={Col} md="3" controlId="validationCustom07">
                            <Dropdown.Toggle variant={"outline-warning"}>{infoSportsman.selectedTrainer.name || "Выберите тренера"}</Dropdown.Toggle>
                            <Dropdown.Menu style={{overflowY: "auto", maxHeight: 200}}>
                                {infoSportsman.infoTrainer.map(trainer =>
                                    <Dropdown.Item
                                        onClick={() => infoSportsman.setSelectedTrainer(trainer)}
                                        key={trainer.id}
                                    >
                                        {trainer.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={Col} md="3" controlId="validationCustom07">
                            <Dropdown.Toggle variant={"outline-warning"}>{infoSportsman.selectedSporttype.title || "Выберите вид спорта"}</Dropdown.Toggle>
                            <Dropdown.Menu style={{overflowY: "auto", maxHeight: 200}}>
                                {infoSportsman.sporttype.map(sporttype =>
                                    <Dropdown.Item
                                        onClick={() => infoSportsman.setSelectedSporttype(sporttype)}
                                        key={sporttype.id}
                                    >
                                        {sporttype.title}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                    <Button onClick={click} variant={"outline-warning"}>Submit form</Button>
                </Form>
            </Container>
        </div>
    );
});

export default AuthSportsman;