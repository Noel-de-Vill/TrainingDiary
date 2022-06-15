import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {createMacrocycle, createStep} from "../../http/cyclesAPI";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CreateMacrocycle = ({show, onHide, sportsmanId : sportsmanId}) => {
    const {cycle: macrocycle} = useContext(Context)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const click = async () => {

        let data
        data = await createMacrocycle(title, description, sportsmanId).then(data => onHide)
        macrocycle.setMacrocycles(macrocycle)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить макроцикл
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите название макроцикла"}
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

export default CreateMacrocycle;