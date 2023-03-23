import React from 'react'
import { golfers } from './golfers'
import Golfer from './Golfer'

const GolferList = () => {
    const getGolfer = (id) => {
        const find = golfers.find((golfer) => golfer.id === id)
        console.log(find)
    }
    return (
        <>
            <h1>Three Golfers</h1>
            <section className='golferlist'>
                {
                    golfers.map((golfer, index) => {
                        return <Golfer {...golfer} key={golfer.id} number={index} getGolfer={getGolfer} />
                    })
                }
            </section>
        </>
    )
}

export default GolferList