import React, {useContext} from 'react';
import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import NavBar from "../components/NavBar";

import Background from "../images/bg.jpg"
import Calendar from "../components/Calendar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Diary = observer(() => {

    const {user} = useContext(Context)

    return (
        <div style={{background: `url(${Background})`, backgroundSize: 'cover', minHeight: window.innerHeight, backgroundAttachment:"fixed"}}>
            <NavBar />
            <Container className="mt-3 d-flex justify-content-center align-items-center" style={{background: "rgba(0,0,0,0.6)", borderRadius: 20, height: 80, fontSize: 25}}>
                <header
                    className ="text-center"
                    style={{color: "orange"}}>
                    Дневник тренировок
                </header>

            </Container>

            <Container className="mt-3">
                <Calendar/>
            </Container>

        </div>
    );
});


export default Diary;
