import React from 'react'
import styled from 'styled-components'
import { Progress } from 'antd'

const Main = () => {

    const renderFolders = () => {
        const folders = [{name: 'Sweden Campaigns'},{name: 'Construction'},{name: 'Team Denmark'}]
        return(
            <div className='mt-4 d-flex justify-content-start'>
                {
                    folders.map((folder) => {
                        return <Folder className='border'>
                            <Icon className="far fa-folder text-primary"></Icon>
                                <span className='ml-2'>{folder.name}</span>
                                <i className="fas fa-ellipsis-v ml-5" style={{color: '#babdbf'}}></i>
                            </Folder>
                    })
                }
            </div>
        )
    }


    const renderCards = () => {

        const cardInfo = [
            {
                name: 'Hotel Gift Cards',
                status: 'ACTIVE',
                revenue: '214K',
                price: '120',
                deals: '321',
                con: null,
                users: 4,
                monthlyTarget: {
                    deals: {
                        total: '4500',
                        done: '1123'
                    },
                    calls: {
                        total: '15,000',
                        done: '11,123'
                    }
                }
            },
            {
                name: 'Equipment Rental',
                status: 'DRAFT',
                revenue: '214K',
                price: '120',
                deals: '321',
                con: '120',
                users: null,
                monthlyTarget: {
                    deals: {
                        total: '3500',
                        done: '1123'
                    },
                    calls: {
                        total: '15,000',
                        done: '9,123'
                    }
                }
            },
            {
                name: 'Hotel Gift Cards',
                status: 'ACTIVE',
                revenue: '214K',
                price: '120',
                deals: '321',
                con: null,
                users: 3,
                monthlyTarget: {
                    deals: {
                        total: '6500',
                        done: '1123'
                    },
                    calls: {
                        total: '15,000',
                        done: '4,123'
                    }
                }
            }
        ]

        const getPercent = (done,total) => {
            let t = parseInt(total);
            let d= parseInt(done);
            return (d/t)*100;
        }


        return (
            <div className='d-flex justify-content-between mt-4' style={{margin: '1px'}}>
                {
                    cardInfo.map((card, index) => {
                        return (
                            <div className='border' style={{width: '31vw', borderRadius: '5px'}}>
                                <div className='d-flex justify-content-between border-bottom text-dark card-name-box p-2' style={{borderLeft : `3px solid ${card.status === 'ACTIVE' ? '#28A745' : 'orange'}`}}>
                                    <div className='pl-3'>
                                    {card.name}
                                    <span className={`ml-2 mt-0 align-middle card-status-${card.status === 'ACTIVE' ? 'active' : 'draft'}`}>{card.status}</span>
                                    </div>
                                    <div>
                                    {
                                        card.users ? <><i className="fas fa-user user-dp"></i>
                                        <i className="fas fa-user user-dp"></i>
                                        <i className="fas fa-user user-dp"></i></> : ''
                                    }
                                    <i className="fas fa-ellipsis-v ml-2" style={{color: '#babdbf', fontSize: '1vw'}}></i>
                                    </div>
                                </div>

                                <div className='d-flex mt-3 card-scroll'>
                                    <p className='d-flex mr-2 ml-2'>
                                    <p className="card-mini-box border">
                                        <p className='mini-box-title'>Revenue</p>
                                        <span className="mini-box-val">{card.revenue}</span>
                                    </p>
                                    <p className="card-mini-box border">
                                    <p className='mini-box-title'>Conv. Price</p>
                                    <span className="mini-box-val">{card.price}</span>
                                    </p>
                                    <p className="card-mini-box border">
                                        <p className='mini-box-title'>Deals</p>
                                        <span className="mini-box-val">{card.deals}</span>
                                    </p>
                                    {
                                        card.con ? 
                                        <p className="card-mini-box border">
                                            <p className='mini-box-title'>Pris/Con</p>
                                            <span className="mini-box-val">{card.con}</span>
                                        </p> : ''
                                    }
                                    </p>
                                </div>

                                <div className='monthly-target-box p-2 border-top'>
                                    <p className='monthly-box-title'>MONTHLY TARGET</p>
                                    <div className='row m-0 p-0'>
                                        <div className='col-1 m-0 p-0'><i className="fas fa-donate deals-logo"></i></div>
                                        <div className='col-11'>
                                            <div className='d-flex justify-content-between' style={{fontSize: '1.1vw'}}>
                                                <span className='font-weight-bold'>Deals</span>
                                                <span className='text-muted'>{card.monthlyTarget.deals.done}/<span className='text-dark font-weight-bold'>{card.monthlyTarget.deals.total}</span> </span>
                                            </div>
                                            <div className='pt-1'>
                                            <Progress percent={getPercent(card.monthlyTarget.deals.done, card.monthlyTarget.deals.total)} strokeColor='#4A81D9' showInfo={false}/>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='row m-0 p-0 mt-3'>
                                        <div className='col-1 m-0 p-0'><i className="fas fa-headset calls-logo"></i></div>
                                        <div className='col-11'>
                                            <div className='d-flex justify-content-between' style={{fontSize: '1.1vw'}}>
                                                <span className='font-weight-bold'>Outbound Calls</span>
                                                <span className='text-muted'>{card.monthlyTarget.calls.done}/<span className='text-dark font-weight-bold'>{card.monthlyTarget.calls.total}</span> </span>
                                            </div>
                                            <div className='pt-1'>
                                            <Progress percent={getPercent(card.monthlyTarget.calls.done, card.monthlyTarget.calls.total)} strokeColor='#45c964' showInfo={false}/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }



    return (
        <MainBox>
            {
                renderFolders()
            }
            {
                renderCards()
            }
        </MainBox>
    )
}

const Icon = styled.i`
  padding: 8px;
  background-color: #E5F1FC;
  border-radius: 5px;
  font-weight: 400;
`;


const MainBox = styled.div`
    margin: 10px;
    border-radius: 5px;
`;

const Folder = styled.span`
    font-size: 1vw;
    border-radius: 5px;
    font-weight: 600;
    color: black;
    padding: 10px;
    border-left: 3px solid blue !important;
    margin-right: 20px;
    background-color: #FFFF;
    cursor: pointer;
`;


export default Main
