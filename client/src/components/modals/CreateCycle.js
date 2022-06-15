import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {createCycle} from "../../http/cyclesAPI";
import Modal from "react-bootstrap/Modal";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CreateCycle = ({show, onHide, stepId : stepId}) => {

    const {cycle} = useContext(Context)
    const [title, setTitle] = useState('')
    const [dateofstart, setDateofstart] = useState('')
    const [dateoffinish, setDateoffinish] = useState('')
    const [type, setType] = useState('')
    const [task, setTask] = useState('')

    const click = async () => {
        let data
        data = await createCycle(title,dateofstart,dateoffinish,type,task,stepId).then(data => onHide)
        cycle.setCycles(cycle)
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить цикл
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите название цикла"}
                    />
                    <Form.Control
                        className="mt-3"
                        value={dateofstart}
                        onChange={e => setDateofstart(e.target.value)}
                        placeholder={"Введите дату начала"}
                    />
                    <Form.Control
                        className="mt-3"
                        value={dateoffinish}
                        onChange={e => setDateoffinish(e.target.value)}
                        placeholder={"Введите дату окончания"}
                    />
                    <Form.Control
                        className="mt-3"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        placeholder={"Введите характер нагрузок"}
                    />
                    <Form.Control
                        className="mt-3"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder={"Введите задачи цикла"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success-" onClick={click}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCycle;