import React from 'react'

export default function RedirectPage(props) {
    console.log(props)
    return (
        <div className="redirect">
            <p>{new URLSearchParams(props.location.search).get("code")}</p>
        </div>
    )
}
