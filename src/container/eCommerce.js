import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from '../components/sideBar/sideBar';
import { Switch, Route } from 'react-router-dom';
import { MyMoves } from './mymoves';
import { MyProfile } from './myprofile';
import { Quote } from './quote';
import { Logout } from './logout';

export const ECommerce = props => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-lg-2'>
                    <SideBar />
                </div>
                <div className='col-lg-10'>
                    <Switch>
                        <Route path='/' exact component={MyMoves} />
                        <Route path='/MyProfile' component={MyProfile} />
                        <Route path='/GetQuote' component={Quote} />
                        <Route path='/Logout' component={Logout} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}