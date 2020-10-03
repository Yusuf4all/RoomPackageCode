import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideBarStyle.css';
export const SideBar = (props) => {
    return (
        <>
            <ul id='sideBar'>
                <li><NavLink activeClassName="active" className='link' to='/'><i className="fas fa-truck"/>MY MOVES</NavLink></li>
                <li><NavLink className='link' to='/MyProfile'><i className="fas fa-user"/>MY PROFILE</NavLink></li>
                <li><NavLink className='link' to='/GetQuote'><i className="fas fa-calculator"/>GET QUOTE</NavLink></li>
                <li><NavLink className='link' to='/Logout'><i className="fas fa-sign-out-alt"/>LOGOUT</NavLink></li>
            </ul>
        </>
    )
}