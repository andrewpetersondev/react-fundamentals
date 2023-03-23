import React from 'react'

const Golfer = (props) => {
    const { id, name, hometown, img, number, getGolfer } = props
    // console.log(props)
    const getSingleGolfer = () => {
        getGolfer(id)
    }
    return (
        <article className='golfer'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h4>{hometown}</h4>
            <span className='number'>#{number + 1}</span>
            <button onClick={getSingleGolfer}>display props in console</button>
        </article>
    )
}

export default Golfer