import React from 'react'
import './BottomButton.sass'

export default function BottomButton(props) {
    return (
        <div className="bottom-button">
            <p>{props.small}</p>
            <button onClick={() => props.onClick}>{props.button}</button>
        </div>
    )
}
