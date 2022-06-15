import React, {useContext, useEffect, useState} from 'react';
import Background from "../images/bg.jpg"
import NavBar from "../components/NavBar";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {useHistory, useParams} from "react-router-dom";
import {DIARY_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {fetchMacrocycle} from "../http/cyclesAPI";
import {fetchInfoTrainer} from "../http/infoAPI";

const InfoTrainer = observer(() => {

    const [infoTrainer, setInfoTrainer] = useState()

    //const {id} = useParams()

    // useEffect(() => {
    //     fetchInfoTrainer(id).then(data => setInfoTrainer(data))
    // },[])


    return (
        <div style={{background: `url(${Background})`, backgroundSize: 'cover', height: window.innerHeight}}>
            <NavBar/>
            <div>.</div>
            <Container className="p-5 mt-5" style={{margin: "auto", background: "rgba(0,0,0,0.5)", color: "orange", borderRadius: 20}}>

                {/*<Row className="mb-3">*/}
                {/*    <div>*/}
                {/*        {user.email}*/}
                {/*    </div>*/}
                {/*</Row>*/}
                {/*    <Row className="mb-3">*/}
                {/*        <div>*/}
                {/*            {infoTrainer.surname}*/}
                {/*        </div>*/}
                {/*    </Row>*/}
                {/*    <Row className="mb-3">*/}
                {/*       <div>*/}
                {/*           {infoTrainer.name}*/}
                {/*       </div>*/}
                {/*    </Row>*/}
                {/*    <Row className="mb-3">*/}
                {/*        <div>*/}
                {/*            {infoTrainer.middlename}*/}
                {/*        </div>*/}
                {/*    </Row>*/}

                {/*    <Button className="mt-3" variant={"outline-warning"}>Submit form</Button>*/}

            </Container>
        </div>
    );
});

export default InfoTrainer;