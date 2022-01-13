import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../BLL/Store/Store";
import {addUnitToCartAC, UnitType} from "../../../BLL/Store/CartReducer";
import {Button, Grid, Paper} from "@mui/material";
import s from "./MainPage.module.css"

export const MainPage = () => {
    const units = useSelector<AppRootStateType, Array<UnitType>>(state => state.units.mainPage)
    const dispatch = useDispatch();
    const onAddToCartHandler = (unit: UnitType) => {
        dispatch(addUnitToCartAC({unit}))
    }
    const unitsForRender = units.map(u => {
        return (
            <Grid item key={u.id}>
                <Paper style={{}}>
                    <div className={s.item}>
                        <div className={s.img} ></div>
                        <div>{u.title}</div>
                        <div>{u.price}$</div>
                        <div>{u.description}</div>
                        <Button onClick={()=>{onAddToCartHandler(u)}} variant={"contained"} color={"primary"}>ADD TO CART</Button>
                    </div>
                </Paper>
            </Grid>

        )
    })
    return (
        <>
            <Grid container spacing={10}>
                {unitsForRender}
            </Grid>
        </>

    )
}