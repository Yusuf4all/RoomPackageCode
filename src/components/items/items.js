import React from 'react';
import { OldHouse } from './oldHouse';
import {NewHouse} from './newHouse';
import { Rooms } from './rooms';
import './item.css';
export const Items = props => {
    return (
        <div id='items'>
            <div className='header'>
                <h5>Inventory Details</h5>
                <button className='btn'>Edit Inventory</button>
            </div>
            <Rooms roomsData={props.roomInfo.items.rooms} />
            <div className='houseDetail'>
                <h5>House Details</h5>
                <button>Edit house details</button>
            </div>
            <div>
                <h5 className='iconColor'>Existing House Details</h5>
                <OldHouse roomData = {props.roomInfo}/>
                <h5 className='iconColor'>New House Details</h5>
                <NewHouse roomData = {props.roomInfo}/>
            </div>
        </div>
    )
}