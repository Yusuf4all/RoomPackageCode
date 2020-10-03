import React from 'react';
import { useEffect, useState } from 'react';
import { Items } from '../items/items';
import './content.css';
export const Content = (props) => {
    const [state, setState] = useState({
        userData: {},
        isLoaded: false,
        isError: true
    });
    const [itemData, isMoreDetail] = useState({
        isClicked: false,
        curruntIndex: ''
    })

    const toggleClick = (index) => {
        // itemData.isClicked = !itemData.isClicked;
        isMoreDetail({
            ...itemData,
            isClicked: !itemData.isClicked,
            curruntIndex: index
        });
    }

    const viewMoreDetail = (index) => {
        toggleClick(index);
    }

    useEffect(() => {
        getAjax();
    }, []);



    const getAjax = () => {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://boxigo.in/sampleAPI_v1.php'
        fetch(proxyUrl+url).then(response => {
            response.json().then(data => {
                setState({ ...state, userData: data, isLoaded: true })
            }).catch(err => {
                console.log(err)
            })
        }).catch(reject => {
            console.log('Reject', reject);
        });
    }
    if (state.isLoaded) {
        return (
            state.userData.Customer_Estimate_Flow.map((data, index) => {
                let isFlexibleIcon = '';
                if (!data.move_date_flexible === 1) {
                    isFlexibleIcon = 'fas fa-times iconColor';
                } else {
                    isFlexibleIcon = 'fas fa-check-square iconColor';
                }
                return (
                    <div id='myMoves' key={data.estimate_id}>
                        <div className='movePlaces'>
                            <div className="from">
                                <h6>From</h6>
                                <p>{data.moving_from}</p>
                            </div>
                            <div className='arrow'>
                                <i className="fas fa-arrow-right iconColor" />
                            </div>
                            <div className="destination">
                                <h6>To</h6>
                                <p>{data.moving_to}</p>
                            </div>
                            <div>
                                <div className='requestId'>
                                    <h6>Request#</h6>
                                    <p className='iconColor'>{data.estimate_id}</p>
                                </div>
                            </div>
                        </div>

                        <div className="moveDetail d-flex">
                            <div className='property_size'>
                                <i className="fas fa-home iconColor" />
                                <p>{data.property_size}</p>
                            </div>
                            <div className='property_items'>
                                <i className="fas fa-sitemap iconColor" />
                                <p>{data.total_items}</p>
                            </div>
                            <div className='distance'>
                                <i className="fas fa-route iconColor" />
                                <p>{data.distance}</p>
                            </div>
                            <div className='moveDate'>
                                <i className="fas fa-calendar-week iconColor" />
                                <p>{data.moving_on}</p>
                                <i className="fas fa-pencil-alt edit" />
                            </div>
                            <div className='flexible'>
                                <i className={isFlexibleIcon} />
                                <p>Is flexible</p>
                            </div>
                            <div className='buttons'>
                                <button className='btn detailBtn' onClick={() => {
                                    viewMoreDetail(index)
                                }
                                }>View move details</button>
                                <button className='btn waitingBtn'>{data.custom_status}</button>
                            </div>
                        </div>
                        <div className='disclaimer d-flex'>
                            <i className='iconColor fas fa-exclamation-triangle' /><p><span className='fontBold'>Disclaimer: </span> Please update your move date before 2 days of shifting</p>
                        </div>
                        {
                            (itemData.isClicked && index === itemData.curruntIndex) &&
                            <Items roomInfo={data} />
                        }
                        {itemData.isClicked = !itemData.isClicked}
                        <hr />
                    </div>
                )
            })

        )
    }
    else {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}
