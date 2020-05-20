import React from 'react'
import './Navbar.sass'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <img src={require('./../../assets/logo.svg')} alt="" />
            <p>{props.title}</p>
        </div>
    )
}
