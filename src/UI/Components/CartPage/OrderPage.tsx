import React from "react";
import s from "./CartPage.module.css"
import {useFormik} from "formik";
import {Button, FormControl, FormGroup, Grid, TextField} from "@mui/material";
import {UnitType} from "../../../BLL/Store/CartReducer";

export type FormikErrorType = {
    name: string
    surname: string
    address: string
    phone: string
}
type OrderPagePropsType = {
    units: Array<UnitType>
}

export const OrderPage = (props: OrderPagePropsType) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: ''
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.surname) {
                errors.surname = 'Required'
            }
            if (!values.address) {
                errors.address = 'Required'
            }
            if (!values.phone) {
                errors.phone = 'Required'
            }
            return errors;
        },

        onSubmit: (values, formikHelpers) => {
            const result = {...values, ordered: props.units}
            alert(JSON.stringify(result));
            // dispatch(loginTC(values))

        }
    })
    return (
            <FormControl>
                <div >
                    <form onSubmit={formik.handleSubmit} className={s.orderSection}>
                        <FormGroup >
                            <TextField style={{marginBottom: "20px"}} variant={"outlined"} label={"Name"}
                                       error={false} {...formik.getFieldProps("name")}/>
                            <TextField style={{marginBottom: "20px"}} variant={"outlined"} label={"Surname"}
                                       error={false} {...formik.getFieldProps("surname")}/>
                            <TextField style={{marginBottom: "20px"}} variant={"outlined"} label={"Address"}
                                       error={false} {...formik.getFieldProps("address")}/>
                            <TextField style={{marginBottom: "20px"}} variant={"outlined"} label={"Phone"}
                                       error={false} {...formik.getFieldProps("phone")}/>
                            <Button variant={"contained"} color={"primary"} type={"submit"}>ORDER</Button>
                        </FormGroup>
                    </form>
                </div>
            </FormControl>

    )
}