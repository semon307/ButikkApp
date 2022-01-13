import {UnitType} from "./CartReducer";
import {v1} from "uuid";
import {createSlice} from "@reduxjs/toolkit";
// import itemImg from "./../../UI/Assets/Images/red-vector-banner-ribbon-hot-260nw-1176567643.jpg"
type InitialStateType = {
    mainPage: Array<UnitType>
}
const initialState: InitialStateType = {
    mainPage: [
        {id: v1(), title: 'React Course', amount: "1", imgUrl: "itemImg", price: "100", description: "Great course about React"},
        {id: v1(), title: 'Redux Course', amount: "1", imgUrl: "itemImg", price: "120", description: "Great course about Redux"},
        {id: v1(), title: 'TypeScript Course', amount: "1", imgUrl: "itemImg", price: "140", description: "Great course about TypeScrit"},
        {id: v1(), title: 'ReduxToolKit Course', amount: "1", imgUrl: "itemImg", price: "160", description: "Great course about ReduxToolKit"},
    ]
}
const slice = createSlice({
    name: "mainPage",
    initialState: initialState,
    reducers: {}
})
export const UnitsReducer = slice.reducer