import React from 'react'
import './Navbar.sass'

export default function Navbar(props) {
    const redirectUrl = process.env.REDIRECT_URL || 'http://localhost:3000/redirect'
    return (
        <div className="navbar">
            <img src={require('./../../assets/logo.svg')} alt="" />
            <p>{props.title}</p>
            <a href={`https://stepik.org/oauth2/authorize/?response_type=code&client_id=qkK7TLMjWPyNagYoYctrOV0bkcQxVHsVpxWBktVg&redirect_uri=${redirectUrl}`}>Войти через Stepik</a>
        </div>
    )
}
