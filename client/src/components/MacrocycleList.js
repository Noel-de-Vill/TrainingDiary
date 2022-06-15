import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import MacrocycleItem from "./MacrocycleItem";
import {fetchMacrocycle} from "../http/cyclesAPI";

const MacrocycleList = observer(({sportsmanId : sportsmanId}) => {
    const {cycle: macrocycle} = useContext(Context)

    useEffect(() => {
        fetchMacrocycle().then(data => macrocycle.setMacrocycles(data))
    },[])

    return (
        <div className={"d-flex"} >
            <Row className="mt-5">
                {macrocycle.macrocycles.filter(macrocycle => macrocycle.sportsmanId === sportsmanId).map(macrocycle =>
                    <MacrocycleItem key={macrocycle.id} macrocycleId={macrocycle.id} cycle={macrocycle}/>
                )}
            </Row>
        </div>
    );
});

export default MacrocycleList;