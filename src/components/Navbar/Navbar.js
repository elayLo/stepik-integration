import React, { useContext } from 'react'
import './Navbar.sass'
import SearchContext from './../../context/SearchContext'

export default function Navbar(props) {
    const context = useContext(SearchContext)
    return (
        <div className="navbar">
            <img src={require('./../../assets/logo.svg')} alt="" />
            <p>{props.title}</p>
            {
                context.user.full_name ? <button className="navbar__log-out" onClick={() => {localStorage.clear(); window.location.reload()}}>Выйти</button> : null
            }

        </div>
    )
}
