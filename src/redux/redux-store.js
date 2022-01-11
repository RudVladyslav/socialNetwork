import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import navbarReducer from "./navbar-reduser";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducers} from 'redux-form';
import appReducer from "./app-reducer";


let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    Navbar: navbarReducer,
    UsersPage: userReducer,
    auth: authReducer,
    form: formReducers,
    app: appReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;