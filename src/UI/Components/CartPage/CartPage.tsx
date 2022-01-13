import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../BLL/Store/Store";
import {changeAmountAC, removeUnitFromCartAC, UnitType} from "../../../BLL/Store/CartReducer";
import s from "./CartPage.module.css"
import {Button, Grid, IconButton, Paper, TextField} from "@mui/material";
import {ControlPoint, Delete, RemoveCircleOutline} from "@mui/icons-material";
import img from "./../../Assets/Images/red-vector-banner-ribbon-hot-260nw-1176567643.jpg"
import {OrderPage} from "./OrderPage";

// const imgStyle = {
//     backgroundImage: `url(${img})`
// }

export const CartPage = () => {
    const units = useSelector<AppRootStateType, Array<UnitType>>(state => state.cart)
    const dispatch = useDispatch();
    const onDeleteHandler = (id: string) => {
        dispatch(removeUnitFromCartAC({id}))
    }
    const onAmountHandler = (id: string, amount: string) => {
        if(+amount < 1){
            dispatch(removeUnitFromCartAC({id}))
        } else {
            dispatch(changeAmountAC({id, amount}))
        }
    }
    const unitsForRender = units.map(u => {
        return (
            <Grid item key={u.id}>
                <Paper style={{}}>
                    <div className={s.cart}>
                        <div className={s.img}></div>
                        <div className={s.description}>
                            <div>{u.title}</div>
                            <div>{u.description}</div>
                            <div>{u.price}$</div>
                        </div>
                        <div className={s.amount}>

                            <IconButton onClick={()=>{onAmountHandler(u.id, (+u.amount - 1).toString())}} color={"primary"}><RemoveCircleOutline/></IconButton>
                            <div>
                                {u.amount}
                            </div>
                            <IconButton onClick={()=>{onAmountHandler(u.id, (+u.amount + 1).toString())}} color={"primary"}><ControlPoint/></IconButton>

                        </div>
                        <IconButton onClick={()=>{onDeleteHandler(u.id)}} aria-label={"delete"}><Delete/></IconButton>
                    </div>
                </Paper>
            </Grid>
        )
    })
    return (
        <Grid container>
            <div className={s.main}>
                <div>
                    {unitsForRender.length ? unitsForRender : "Your cart is empty!"}
                </div>
                <OrderPage units={units}/>
            </div>
        </Grid>

    )
}