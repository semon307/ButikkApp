import {v1} from "uuid";
import {addUnitToCartAC, CartReducer, changeAmountAC, removeUnitFromCartAC, UnitType} from "../Store/CartReducer";
import {text} from "stream/consumers";

let unitId1: string
let unitId2: string

let startState: Array<UnitType> = []


beforeEach(() => {
    unitId1 = v1();
    unitId2 = v1()
    startState = [
        {id: unitId1, title: 'React Course', amount: "1", imgUrl: "", price: "100", description: ""},
        {id: unitId2, title: 'Redux Course', amount: "1", imgUrl: "", price: "120", description: ""},
    ]
})
test('unit should be added to cart', () => {
    const newUnit = {id: v1(), title: 'TypeScript Course', amount: "1", imgUrl: "", price: "140", description: ""}
    const endState = CartReducer(startState, addUnitToCartAC({unit: newUnit}))
    expect(endState.length).toBe(3)
    expect(endState[2].price).toBe("140")
})
test("task should not be added, but amount updated", ()=> {
    const newUnit = {id: unitId2, title: 'Redux Course', amount: "1", imgUrl: "", price: "120", description: ""};
    const endState = CartReducer(startState, addUnitToCartAC({unit: newUnit}));
    expect(endState.length).toBe(2);
    expect(endState[1].amount).toBe("2")
})
test("correct unit should be removed", ()=> {
    const endState = CartReducer(startState, removeUnitFromCartAC({id: unitId2}))
    expect(endState.length).toBe(1)
    expect(endState[0].title).toBe("React Course")
})
test('unit amount should be changed', ()=> {
    const payload = {id: unitId2, amount: "2"}
    const endState = CartReducer(startState, changeAmountAC(payload))
    expect(endState[1].amount).toBe("2")
})