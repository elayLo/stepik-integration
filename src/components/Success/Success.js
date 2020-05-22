import React from 'react'
import './Success.sass'


export default function Success() {
    return (
        <div className="success">
            <img src={require('./../../assets/tick.svg')} alt=""/>
            <p>Вы пометили ответ, как верный</p>
        </div>
    )
}
