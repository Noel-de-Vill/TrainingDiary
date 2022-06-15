import React, {useContext, useState} from 'react';
import {Accordion, Button, Card, Col, Image, useAccordionButton} from "react-bootstrap";
import CycleList from "./CycleList";
import {Context} from "../index";
import CreateStep from "./modals/CreateStep";
import CreateCycle from "./modals/CreateCycle";

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


const StepItem = ({stepId: stepId, cycle: step}) => {

    const [cycleVisible, setCycleVisible] = useState(false)
    const [stepVisible, setStepVisible] = useState(false)

    return (
        <Accordion as={Col} md="10">
            <Card style={{border: "none", margin: "auto", background: "none", color: "orange"}}>
                <Card.Header className="d-flex">
                    <CustomToggle
                        eventKey="step.id">{step.title}
                    </CustomToggle>
                    <Button variant="outline-warning" className="border-0 align-top d-lg-inline" onClick={() => setStepVisible(true)}><Image src="https://psv4.userapi.com/c237231/u212962401/docs/d16/d61b7cd23cb2/Bez_imeni-1.png?extra=LmjAxSlsEYATR6iFCZVyEhxV__rZ11CXrwC1puO_sH1FRhbIKIG6KVbqpBGSieTgjgBgJ4YECCBPAtcvtWGzzxlQULdeU6Qaa76VoFwau2drCwMAfvsxulfllKwWr7wO8kHxFbtHiYQj3IAEgQuDMpccNAs" style={{width:25}}/></Button>
                    <CreateStep show = {stepVisible} onHide={() => setStepVisible(false)}/>
                </Card.Header>
                <Accordion.Collapse eventKey="step.id">
                    <Card.Body>
                        {step.description}

                        <CycleList stepId={stepId}/>
                        <Button variant="outline-warning" className="mt-3" onClick={() => setCycleVisible(true)}>Добавить цикл</Button>
                        <CreateCycle show = {cycleVisible} onHide={() => setCycleVisible(false)} stepId = {stepId}/>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default StepItem;
