import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import MacrocycleList from "../components/MacrocycleList";

import Background from "../images/bg.jpg"
import NavBar from "../components/NavBar";
import {Button, Col, Container, Dropdown} from "react-bootstrap";
import {Context} from "../index";
import {fetchInfoSportsman, fetchInfoTrainer, fetchSporttype} from "../http/infoAPI";
import CreateCycle from "../components/modals/CreateCycle";
import CreateMacrocycle from "../components/modals/CreateMacrocycle";

const Cycles = observer(({sportsmanId: sportsmanId}) => {

    const {info: infoSportsman} = useContext(Context)
    const [macrocycleVisible, setMacrocycleVisible] = useState(false)


    useEffect(() => {
        fetchInfoSportsman().then(data => infoSportsman.setInfoSportsman(data))
    }, [])

    return (
        <div style={{background: `url(${Background})`, backgroundSize: 'cover', minHeight: window.innerHeight, backgroundAttachment:"fixed"}}>
            <NavBar/>
            <Container className="mt-3 d-flex justify-content-center align-items-center" style={{background: "rgba(0,0,0,0.6)", borderRadius: 20, height: 80, fontSize: 25}}>
                <header
                    className ="text-center"
                    style={{color: "orange"}}>
                    Календарь
                </header>

            </Container>
            <Container className="mt-3" style={{margin: "auto", background: "rgba(0,0,0,0.6)", color: "orange", minHeight: window.innerHeight, borderRadius: 20}}>
                <Dropdown as={Col} md="3" controlId="validationCustom07" style={{float: "right"}} className="mt-3">
                    <Dropdown.Toggle variant={"outline-warning"}>{infoSportsman.selectedSportsman.name || "Выберите спортсмена"}</Dropdown.Toggle>
                    <Dropdown.Menu style={{background: "rgba(0,0,0,0.6)", overflowY: "auto", maxHeight: 200}}>
                        {infoSportsman.infoSportsman.map(trainer =>
                            <Dropdown.Item style={{color:"orange"}}
                                onClick={() => infoSportsman.setSelectedSportsman(trainer)}
                                key={trainer.id}
                            >
                                {trainer.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                {infoSportsman.selectedSportsman.name != null ?
                    <div>
                        <MacrocycleList sportsmanId={infoSportsman.selectedSportsman.id}/>
                        <Button variant="outline-warning" onClick={() => setMacrocycleVisible(true)}>Добавить макроцикл</Button>
                        <CreateMacrocycle show = {macrocycleVisible} onHide={() => setMacrocycleVisible(false)} sportsmanId={sportsmanId}/>
                    </div>

                    :
                    <div>

                    </div>
                }


            </Container>


        </div>

    );
});

export default Cycles;