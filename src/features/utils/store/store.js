import { createStore, combineReducers } from "redux";

const initialEmail = [];
const emailReducer = (state=initialEmail, action) => {
    switch(action.type) {
        case 'getEmail':
            return [...action.payload]
        default:
            return state
    }
}

const initialMain = {name:'', email:''};
const mainReducer = (state=initialMain, action) => {
    switch(action.type) {
        case 'openEmail':
            return action.payload
        default:
            return state
    }
}

const store = createStore(combineReducers({
    email: emailReducer,
    main: mainReducer
}))

export default store