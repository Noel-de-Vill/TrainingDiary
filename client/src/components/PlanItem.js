import React from 'react';
import {Accordion, Card, Col, useAccordionButton} from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink', width: 500, border: 'none'}}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const PlanItem = ({plan}) => {
    return (
        <tr>
            <td>{plan.id}</td>
            <td>{plan.numberoftimes}</td>
            <td>{plan.numberofex}</td>
        </tr>
    );
};

export default PlanItem;