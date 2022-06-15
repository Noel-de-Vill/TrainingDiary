import React from 'react';
import {Accordion, Card, Col, Table, useAccordionButton} from "react-bootstrap";
import MacrocycleList from "./MacrocycleList";
import PlanItem from "./PlanItem";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";
import {PLANS_ROUTE} from "../utils/consts";

const CycleItem = ({cycle}) => {
    const history = useHistory()

    const click = async () => {
        history.push(PLANS_ROUTE)
    }

    return (
        <tr>
            <td style = {{width: 112}}>{cycle.title}
                <Button
                variant={"outline-warning"}
                className="mt-3"
                onClick={click}
                >
                    >
                </Button>
            </td>
            <td style = {{width: 112}}>{cycle.dateofstart}</td>
            <td style = {{width: 112}}> {cycle.dateoffinish}</td>
            <td> {cycle.type}</td>
            <td>{cycle.task}</td>
        </tr>
    );
};

export default CycleItem;