import React from 'react';
import {Accordion, Card, Container, useAccordionButton} from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink', width: 200}}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Item = ({sportsman}) => {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="sportsman.id">{sportsman.id}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="sportsman.id">
                    <Card.Body>
                        {sportsman.name}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default Item;