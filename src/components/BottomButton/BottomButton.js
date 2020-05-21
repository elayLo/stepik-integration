import React from 'react'
import './BottomButton.sass'
import { Link } from 'react-router-dom'

export default function BottomButton(props) {
    return (
        <div className="bottom-button">
            <p>{props.small}</p>
            {
                props.link ? <Link to={props.link}><button>{props.button}</button></Link> : <button onClick={() => props.onClick}>{props.button}</button>
            }
            
        </div>
    )
}
