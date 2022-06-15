import React, {useContext, useState} from 'react';
import {createStep} from "../../http/cyclesAPI";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../../index";
import {createInfoTrainer} from "../../http/infoAPI";
import {DIARY_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const CreateStep = ({show, onHide, macrocycleId : macrocycleId}) => {

    const {cycle: step} = useContext(Context)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const click = async () => {

        let data
        data = await createStep(title, description, macrocycleId).then(data => onHide)
        step.setSteps(step)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить этап
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите название этапа"}
                    />
                    <Form.Control className="mt-3"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите описание"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={click}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateStep;