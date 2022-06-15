import React, {useContext, useEffect} from 'react';

import {observer} from "mobx-react-lite";
import {Container, Table} from "react-bootstrap";
import NavBar from "../components/NavBar";
import {BrowserRouter} from "react-router-dom";

import Background from "../images/bg.jpg"
import PlanItem from "../components/PlanItem";
import {Context} from "../index";
import {fetchPlans} from "../http/plansAPI";

const Plans = observer(() => {

    const {plans: plan} = useContext(Context)

    useEffect(() => {
        fetchPlans().then(data => plan.setPlans(data))
    },[])

    return (

            <div  style={{background: `url(${Background})`, backgroundSize: 'cover', minHeight: window.innerHeight, backgroundAttachment:"fixed"}}>
            <NavBar/>
                <Container className="mt-3 d-flex justify-content-center align-items-center" style={{background: "rgba(0,0,0,0.6)", borderRadius: 20, height: 80, fontSize: 25}}>
                        <header
                            className ="text-center"
                            style={{color: "orange"}}>
                            План тренировок
                        </header>

                </Container>
                <Container className="mt-3 d-flex" style={{background: "rgba(0,0,0,0.6)", minHeight: 1000, borderRadius: 20}}>
                    <Table striped bordered variant="warning" className="mt-5" style={{width: 1000, margin: "auto", background: "none", color: "orange"}}>
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Количество подходов</th>
                            <th>Количество</th>
                        </tr>
                        </thead>

                        <tbody>
                        {plan.planes.map(plan=>
                            <PlanItem key={plan.id} plan={plan}/>
                        )}
                        </tbody>


                    </Table>
                </Container>

            </div>


        );
});


export default Plans;