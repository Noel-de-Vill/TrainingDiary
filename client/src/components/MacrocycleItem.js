import React, {useState} from 'react';
import {Accordion, Button, Card, Col, useAccordionButton} from "react-bootstrap";
import StepList from "./StepList";
import CreateStep from "./modals/CreateStep";
import {observer} from "mobx-react-lite";

function CustomToggle({ children, eventKey }) {

    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'orange', width: 500, border: 'none'}}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const MacrocycleItem = observer(({macrocycleId: macrocycleId, cycle: macrocycle}) => {

    const [stepVisible, setStepVisible] = useState(false)
    return (
        <Accordion as={Col} md="10">
            <Card style={{border: "none", margin: "auto", background: "none", color: "orange"}}>
                <Card.Header>
                    <CustomToggle eventKey="macrocycle.id">{macrocycle.title}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="macrocycle.id">
                    <Card.Body>
                        <StepList macrocycleId = {macrocycleId}/>
                        <Button variant="outline-warning" onClick={() => setStepVisible(true)}>Добавить этап</Button>
                        <CreateStep show = {stepVisible} onHide={() => setStepVisible(false)} macrocycleId = {macrocycleId}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
});

export default MacrocycleItem;
