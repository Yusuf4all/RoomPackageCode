import React from 'react';
import { RoomDetail } from './roomDetail';
import { useState } from 'react';
export const Rooms = (props) => {
    // let quantity = 0;
    // props.roomsData.forEach(room => {
    //     if (room.hasCategory) {
    //         room.categories.forEach(cat => {
    //             cat.itemsList.all.forEach(ele => {
    //                 if (ele.qty !== '0') {
    //                     return
    //                     console.log(ele.qty)
    //                 }
    //                 // quantity += parseInt(ele.qty);
    //             })
    //         })
    //     }
    // });
    // console.log(quantity);
    const [roomData, isMoreDetail] = useState({
        isClicked: false,
        curruntIndex: ''
    });

    const doToggle = (index) => {
        isMoreDetail({
            ...roomData,
            isClicked: !roomData.isClicked,
            curruntIndex: index
        })
    }

    const roomMoreDetails = (index) => {
        doToggle(index)
    }
    return (
        props.roomsData.map((room, index) => {
            return (<div key={room.id}>
                <div className="inventory" >
                    <h5>{room.roomName}
                    {/* <span className="available">5</span> */}
                    </h5>
                    <button onClick={() => {
                        roomMoreDetails(index)
                    }}><i className='fas fa-angle-up' /></button>

                </div>
                {
                    (roomData.isClicked && index === roomData.curruntIndex) &&
                    <RoomDetail room={room} />
                }
                {roomData.isClicked = !roomData.isClicked}
            </div>
            )
        })
    )
}