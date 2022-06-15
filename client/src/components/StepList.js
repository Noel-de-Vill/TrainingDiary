import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import StepItem from "./StepItem";
import {fetchMacrocycle, fetchStep} from "../http/cyclesAPI";

const StepList = observer(({macrocycleId : macrocycleId}) => {
    const {cycle: step} = useContext(Context)

    useEffect(() => {
        fetchStep().then(data => step.setSteps(data))
    },[])

    return (
        <div className={"d-flex"} >
            <Row>
                {step.steps.filter(step => step.macrocycleId === macrocycleId).map(step =>
                    <StepItem key={step.id} stepId={step.id} cycle={step}/>
                )}
            </Row>
        </div>
    );
});

export default StepList;
