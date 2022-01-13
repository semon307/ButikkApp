import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MainPage} from "./UI/Components/MainPage/MainPage";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {CartPage} from "./UI/Components/CartPage/CartPage";
import {Menu, ShoppingCart} from "@mui/icons-material";
import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/Store/Store";
import {UnitType} from "./BLL/Store/CartReducer";


type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const cartState = useSelector<AppRootStateType, Array<UnitType>>(state => state.cart)
    const currentCartPrice = cartState.reduce((acc, u) => acc + +u.price * +u.amount, 0)

    return (
        <div className="App">
            <React.Fragment>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <NavLink style={{textDecoration: "none", color: "white"}} to={"/"}>Main</NavLink>
                        </Typography>
                        <IconButton edge={"end"} color={"inherit"}>
                            <NavLink style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}} to={"cart"}>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1, padding: "10px"}}>
                                    {cartState.length ? `${currentCartPrice}$` : null}
                                </Typography>
                                <ShoppingCart/>
                            </NavLink>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
            <Container fixed>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"cart"} element={<CartPage/>}/>
                    <Route path="404" element={<h1>404: PAGE NOT FOUND</h1>}/>

                    {/*<Route path="*" element={<Navigate to='/404'/>}/>*/}
                </Routes>
            </Container>
        </div>
    )
        ;
}

export default App;
