import React from 'react'
import styled from 'styled-components';

const Header = () => {
    const thisMonthDetails = {
        revenue : '216,726',
        revenueGrowth: '30',
        meetingsBooked: '128',
        currency: '€',
        meetingsGrowth: '-1.5',
        sales: '622',
        salesGrowth: '2.5',
        calls: '322',
        callsGrowth: '-1.5'
    }

    return (
        <TopBar className=' d-flex align-items-center justify-content-around'>

                <div>
                    <div className='row'>
                        <div className='col-3'>
                            <i className="fas fa-arrow-up arrow-box text-success" style={{fontSize: '0.9vw'}}></i>
                        </div>
                        <div className='col-9 header-text-primary'>
                            {thisMonthDetails.currency + thisMonthDetails.revenue}
                            <span className='perc-header text-success ml-3'>
                            +{thisMonthDetails.revenueGrowth}%
                            </span>
                            <div className='small-header-font'>
                                Revenue this month
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                <div className='d-flex justify-content-between'>
                    <div><i className='badge'>1</i><i className="fas fa-user header-dp"></i></div>
                    <div><i className='badge'>2</i><i className="fas fa-user header-dp"></i></div>
                    <div><i className='badge'>1</i><i className="fas fa-user header-dp"></i></div>
                </div>
                </div>

                <div>
                    <div className='row'>
                        <div className='col-3'>
                            <i className="fas fa-arrow-down arrow-box text-danger" style={{fontSize: '0.9vw'}}></i>
                        </div>
                        <div className='col-9 header-text-primary'>
                            {thisMonthDetails.meetingsBooked}
                            <span className='perc-header text-danger ml-3'>
                            {thisMonthDetails.meetingsGrowth}%
                            </span>
                            <div className='small-header-font'>
                                Revenue this month
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <div className='row'>
                        <div className='col-3'>
                            <i className="fas fa-arrow-up arrow-box text-success" style={{fontSize: '0.9vw'}}></i>
                        </div>
                        <div className='col-9 header-text-primary'>
                            {thisMonthDetails.sales}
                            <span className='perc-header text-success ml-3'>
                            {thisMonthDetails.meetingsGrowth}%
                            </span>
                            <div className='small-header-font'>
                               Meetings this month
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <div className='row'>
                        <div className='col-3'>
                            <i className="fas fa-arrow-down arrow-box text-danger" style={{fontSize: '0.9vw'}}></i>
                        </div>
                        <div className='col-9 header-text-primary'>
                            {thisMonthDetails.calls}
                            <span className='perc-header text-danger ml-3'>
                            {thisMonthDetails.callsGrowth}%
                            </span>
                            <div className='small-header-font'>
                                Calls this month
                            </div>
                        </div>
                        
                    </div>
                </div>


        </TopBar>
    )
}

const TopBar = styled.div`
    background-color: #202258;
    height: 80px;
    margin: 10px;
    border-radius: 5px;
`;


export default Header
