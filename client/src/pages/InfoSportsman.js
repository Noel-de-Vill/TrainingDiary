import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";

import Background from "../images/bg.jpg"
import {Context} from "../index";
import NavBar from "../components/NavBar";
import {BrowserRouter} from "react-router-dom";
import {fetchInfoSportsman} from "../http/infoAPI";
import {Alert, Button, Col, Container, Dropdown} from "react-bootstrap";
import MacrocycleList from "../components/MacrocycleList";
import CreateMacrocycle from "../components/modals/CreateMacrocycle";

const InfoSportsman = observer(() => {
    const {info: info, user: user} = useContext(Context)

    useEffect(() => {
        fetchInfoSportsman().then(data => info.setInfoSportsman(data))
    },[])

    function getSportsmenInfo() {
        console.log(info.infoSportsman);
        console.log(user.user);
        for (let i = 0; i < info.infoSportsman.length; i++) {
            if (info.infoSportsman[i].userId === user.user.id) {
                return info.infoSportsman[i];
            }
        }
    }

    return (

            <div  style={{background: `url(${Background})`, backgroundSize: 'cover', minHeight: window.innerHeight, backgroundAttachment:"fixed"}}>
                <NavBar/>

                <Container className="mt-3 d-flex justify-content-center align-items-center" style={{background: "rgba(0,0,0,0.6)", borderRadius: 20, height: 80, fontSize: 25}}>
                    <header
                        className ="text-center"
                        style={{color: "orange"}}>
                        Личная информация {getSportsmenInfo() != null ? getSportsmenInfo().name : "Sorry"}
                    </header>

                </Container>

                <Container className="mt-3" style={{margin: "auto", background: "rgba(0,0,0,0.6)", color: "orange", minHeight: window.innerHeight, borderRadius: 20}}>

                    <div>

                        <Alert style={{color: "orange", backgroundColor: "rgba(0,0,0,0.6)", borderColor: "black"}}>
                            {getSportsmenInfo() != null ? getSportsmenInfo().surname : "Sorry"}
                        </Alert>
                        <Alert style={{color: "orange", backgroundColor: "rgba(0,0,0,0.6)", borderColor: "black"}}>
                            {getSportsmenInfo() != null ? getSportsmenInfo().name : "Sorry"}
                        </Alert>
                        <Alert style={{color: "orange", backgroundColor: "rgba(0,0,0,0.6)", borderColor: "black"}}>
                            {getSportsmenInfo() != null ? getSportsmenInfo().middlename : "Sorry"}
                        </Alert>
                        <Alert style={{color: "orange", backgroundColor: "rgba(0,0,0,0.6)", borderColor: "black"}}>
                            {getSportsmenInfo() != null ? getSportsmenInfo().birthdate : "Sorry"}
                        </Alert>
                        <Alert style={{color: "orange", backgroundColor: "rgba(0,0,0,0.6)", borderColor: "black"}}>
                            {getSportsmenInfo() != null ? getSportsmenInfo().height + " м." : "Sorry"}
                        </Alert>
                        <Alert style={{color: "orange", backgroundColor: "rgba(0,0,0,0.6)", borderColor: "black"}}>
                            {getSportsmenInfo() != null ? getSportsmenInfo().weight + " кг." : "Sorry"}
                        </Alert>
                        </div>

                </Container>


            </div>

    );
});
export default InfoSportsman;