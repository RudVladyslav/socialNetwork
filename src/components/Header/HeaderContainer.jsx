import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData, logout, setAuthData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return ({
        login: state.auth.login,
        email: state.auth.email,
        isAuth:state.auth.isAuth
    })
}


export default connect(mapStateToProps, {
    setAuthData,
    getAuthData,
    logout
})(HeaderContainer);