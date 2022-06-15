import React, {useContext, useDeferredValue, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import CycleItem from "./CycleItem";
import {Row, Table} from "react-bootstrap";
import {fetchCycle, fetchCycleByStep} from "../http/cyclesAPI";
import {useParams} from "react-router-dom";
import {useReduxContext} from "react-redux/lib/hooks/useReduxContext";

const CycleList = observer(({stepId : stepId}) => {
    const {cycle} = useContext(Context)

    // useEffect(() => {
    //     fetchCycle().then(data => cycle.setCycles(data))
    // },[])

    useEffect(() => {
        fetchCycleByStep(stepId).then(data => {
            cycle.setCycles(data.rows)
        })
    }, [stepId,])

    return (
            <div className={"d-flex"} >
                    <Table striped bordered variant="warning" style={{width: 1100, margin: "auto", background: "none", color: "orange"}}>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Дата начала</th>
                            <th>Дата окончания</th>
                            <th>Тип упражнения</th>
                            <th>Задачи</th>
                        </tr>
                        </thead>

                        <tbody>
                        {/*{cycle.cycles.filter(cycle => cycle.stepId === stepId).map(cycle =>*/}
                        {/*    <CycleItem key={cycle.id} cycle={cycle}/>*/}
                        {/*)}*/}
                        {cycle.cycles.map(cycle =>
                            <CycleItem key={cycle.id} cycle={cycle}/>
                        )}
                        </tbody>
                    </Table>
            </div>
    );
});

export default CycleList;