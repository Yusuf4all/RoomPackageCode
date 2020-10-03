import React from 'react';
import './houseStyle.css';
export const OldHouse = (props) => {
    return (
        <div className="container-fluid" id="houseDetail">
            <div className="row">
                <div className="col-lg-3">
                    <div className='houseItem'>
                        <h6>Floor No.</h6>
                        <p>{props.roomData.old_floor_no}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='houseItem'>
                        <h6>Evelvator Available</h6>
                        <p>{props.roomData.old_elevator_availability}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='houseItem'>
                        <h6>Packing Required</h6>
                        <p>{props.roomData.packing_service}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='houseItem'>
                        <h6>Distance from truck to door</h6>
                        <p>{props.roomData.old_parking_distance}</p>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-3">
                    <div className='houseItem'>
                        <h6>Additional Infromation</h6>
                        {
                            (props.roomData.old_house_additional_info == '')&&
                            <p>No Additional Data</p>
                        }
                        {
                            (props.roomData.old_house_additional_info !== '')&&
                            <p>{props.roomData.old_house_additional_info}</p>
                        }
                    </div>
                </div>
            </div>

            <hr />
        </div>
    )
}

