import React from 'react'
import styled from 'styled-components'

const Chips = () => {

    const tags = [{name :'Phoners'},{name :'Teams'},{name :'Campaign Status'},{name :'Sales'}]
    return (
        <ChipsBox className=' d-flex align-items-center justify-content-between'>
            <div>
                <span className='chips-last-dir'>
                    Campains<i className="fas fa-chevron-right ml-2 mr-2" style={{fontSize: '1vw'}}></i>
                </span>
                <span style={{color: 'grey', fontSize: '1.2vw'}} className=''>
                    Etgodelbred.dk
                </span>
            </div>

            <div>
                {
                    tags.map((item) => {
                        return <Tags className='border ml-2'>{item.name}</Tags>
                    })
                }
            </div>

        </ChipsBox>
    )
}

const ChipsBox = styled.div`
    font-weight: 500;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
`;

const Tags = styled.span`
    cursor: pointer;
    padding: 3px 7px;
    font-weight: 600;
    font-size: 1.1vw;
    color: #717476;
    border-radius: 10px;
`;

export default Chips
