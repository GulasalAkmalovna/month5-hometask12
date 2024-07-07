import { saveToLocalStorage } from "../../components/utils";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":{
            const newState = [...state, action.user]
            saveToLocalStorage("cart", newState)
            return newState
        }
        case "REMOVE_FROM_CART":{
            const newState = state.filter(user => user.id !== action.id)
            saveToLocalStorage("cart", newState)
            return newState
        }        
        default:
            return state
    }
}

export {reducer, initialState}