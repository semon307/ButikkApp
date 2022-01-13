import {AppRootStateType} from "../Store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('butikkState');
        if (serializedState) {
            return JSON.parse(serializedState);
        } else {
            return undefined;
        }

    } catch (err) {
        return undefined;
    }
};
export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('butikkState', serializedState);
    } catch {
        // ignore write errors
    }
};