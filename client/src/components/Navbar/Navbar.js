import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logOutHandler = event => {
        event.preventDefault()
        auth.logOut()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper  indigo darken-3">
                <span style={{marginLeft: '5%', fontSize: '23px'}}>Know-How</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/personal'>Личный кабинет</NavLink></li>
                    <li><NavLink to='/main'>Главная страница</NavLink></li>
                    <li><a href="/" onClick={logOutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;