import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {CYCLES_ROUTE, DIARY_ROUTE, INFOSPORTSMAN_ROUTE, LOGIN_ROUTE, PLANS_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar style={{background: "rgba(0,0,0,0.7)"}}>
            <Container>
                <NavLink className='m-lg-3' style={{color:'orange'}} to={DIARY_ROUTE}>Дневник</NavLink>
                <NavLink className='m-lg-3' style={{color:'orange'}} to={CYCLES_ROUTE}>Планы</NavLink>
                <NavLink className='m-lg-3' style={{color:'orange'}} to={INFOSPORTSMAN_ROUTE}>Личная информация</NavLink>

                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-warning"}
                            onClick={() => logOut()}
                            className="ml-2"
                            variant={"outline-warning"}
                        >
                            <NavLink style={{color:'orange'}} to={LOGIN_ROUTE}>Выйти</NavLink>

                        </Button>
                    </Nav>

            </Container>
        </Navbar>

    );
});

export default NavBar;
