import { createStore, combineReducers } from "redux";

const initialEmail = [];
const emailReducer = (state=initialEmail, action) => {
    let uniqueId = 0;
    switch(action.type) {
        case 'getEmail':
            return action.payload.map(item => {
                item.key = uniqueId++
                return item
            })
        case 'deleteEmail':
            return state.filter(item => item.key !== action.payload)
        default:
            return state
    }
}

const initialTrash = [];
const trashReducer = (state=initialTrash, action) => {
    switch (action.type) {
        case 'trash/delete':
            return [action.payload, ...state]
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

const initialPage = 'main';
const pageReducer = (state=initialPage, action) => {
    switch(action.type) {
        case 'activePage':
            return action.payload
        default:
            return state
    }
}

const initialColor = 'teal';
const colorReducer = (state=initialColor, action) => {
    switch(action.type) {
        case 'changeColor':
            return action.payload
        default:
            return state
    }
}

const store = createStore(combineReducers({
    email: emailReducer,
    main: mainReducer,
    page: pageReducer,
    color: colorReducer,
    trash: trashReducer
}))

export default store