import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CartReducer} from "./CartReducer";
import {UnitsReducer} from "./UnitsReducer";
import {loadState} from "./StoreUtils/LocalStorageUtils";

const rootReducer = combineReducers({
    cart: CartReducer,
    units: UnitsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})
store.subscribe(()=>{
    localStorage.setItem("butikkState", JSON.stringify(store.getState()))
})
export type AppRootStateType = ReturnType<typeof rootReducer>