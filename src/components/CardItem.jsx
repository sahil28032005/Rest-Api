import React from 'react'

export default function CardItem(props) {
    return (
        <div className='card'>
            <img src="https://st2.depositphotos.com/1052468/5589/i/450/depositphotos_55890089-stock-photo-blame-button-on-computer-pc.jpg" alt="" />
            <div className="innerCont">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <button>click</button>
            </div>
        </div>
    )
}
