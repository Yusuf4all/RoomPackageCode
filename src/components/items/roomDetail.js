import React from 'react';
import './room.css';
export const RoomDetail = props => {
    let content = '';
    let subContent = '';
    if (props.room.hasCategory) {
        let quantity = 0;
        content = props.room.categories.map((cat, index) => {
            subContent = cat.itemsList.all.map(ele => {
                if (ele.qty !== '0') {
                    quantity += parseInt(ele.qty);
                    return (
                        <div className='info' key={ele.name}>
                            <div className='d-flex justify-content-between desc'>
                                <p>{ele.display_name}</p>
                                <span>{ele.qty}</span>
                            </div>
                            <div className="type">
                                {
                                    (ele.type) &&
                                    <p>{ele.type.default_type}</p>
                                }
                                {
                                    (ele.size) &&
                                    <p>{ele.size.defaultSelect}</p>
                                }

                            </div>
                        </div>
                    )
                }
            })
            return (
                <div className='col col-lg-3' key={cat.categoryID}>
                    <div className='header'>
                        <h5>{cat.categoryName}</h5>
                    </div>
                    {subContent}
                </div>
            )
        })
    }
    return (
        <div className='container-fluid' id="roomDetails">
            <div className='row'>
                {content}
            </div>
        </div>
    )
}