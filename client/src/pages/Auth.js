import React, {useContext, useState} from 'react';
import {Container, Card, Form, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useHistory} from "react-router-dom";

import {AUTHSPORTSMAN_ROUTE, AUTHTRAINER_ROUTE, DIARY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

import Background from "../images/bg.jpg"
import {createInfoTrainer} from "../http/infoAPI";

const roles = ['SPORTSMAN', 'TRAINER']

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, role);
            }
            user.setUser(data)
            user.setIsAuth(true)
            if (isLogin) {
                history.push(DIARY_ROUTE)
            } else {
                if (role === 'TRAINER'){
                    history.push({ pathname: AUTHTRAINER_ROUTE, state: { email: data.email, idtrainer: data.id } })
                } else {
                    history.push({ pathname: AUTHSPORTSMAN_ROUTE, state: { email: data.email, idsportsman: data.id } })
                }
            }

        } catch (e) {
            alert(e.response.data.message)
        }

    }


    return (
        <div style={{background: `url(${Background})`, backgroundSize: 'cover', minHeight: window.innerHeight, backgroundAttachment:"fixed"}}>

            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600, background: "rgba(0,0,0,0.5)", color: "white", borderRadius: 20}} className="p-5">
                    <h2 className="m-auto" >{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ?
                                <div></div>
                                :
                                <Form className="justify-content-between">
                                    {roles.map(f => (
                                        <>
                                            <input className="ml-3"
                                                   type="radio"
                                                   name="role"
                                                   value={f}
                                                   checked={role === f}
                                                   onChange={e => setRole(e.target.value)}
                                                   key = {f}
                                            />{" "}
                                            {f}
                                        </>
                                    ))}
                                </Form>
                            }
                        </Row>
                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">


                            {isLogin ?
                                <div >
                                    Нет аккаунта? <NavLink style={{color: "lightgreen"}} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>

                                    Есть аккаунт? <NavLink style={{color: "lightgreen"}} to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                            <Button
                                variant={"outline-warning"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Row>

                    </Form>
                </Card>
            </Container>

        </div>

    );
});

export default Auth;