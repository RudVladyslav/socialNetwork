import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthData} from "./auth-reducer"

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


// Action creator

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

// Thunk creator

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;
