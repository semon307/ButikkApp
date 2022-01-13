import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

export type UnitType = {
    id: string
    title: string
    price: string
    amount: string
    imgUrl: string
    description: string
}
const inititalState: Array<UnitType> = []

const slice = createSlice({
    name: "cart",
    initialState: inititalState,
    reducers: {
        addUnitToCartAC(state, action: PayloadAction<{ unit: UnitType }>) {
            if (state.some(u => u.id === action.payload.unit.id)) {
                const foundUnit = state.filter(u => u.id === action.payload.unit.id)[0]
                foundUnit.amount = (+foundUnit.amount + 1).toString()
            } else {
                state.push(action.payload.unit)
            }
        },
        removeUnitFromCartAC(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(u => u.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1)
            }
        },
        changeAmountAC(state, action: PayloadAction<{ id: string, amount: string }>) {
            const foundUnit = state.filter(u => u.id === action.payload.id)[0];
            foundUnit.amount = action.payload.amount
        }
        // setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
        //     state.isLoggedIn = action.payload.value
        // }
    },
    // extraReducers: builder => {
    //     builder.addCase(loginTC.fulfilled, (state) => {
    //         state.isLoggedIn = true;
    //     })
    //     builder.addCase(logoutTC.fulfilled, (state) => {
    //         state.isLoggedIn = false
    //     })
    // }
})
export const CartReducer = slice.reducer;
export const {addUnitToCartAC, removeUnitFromCartAC, changeAmountAC} = slice.actions;