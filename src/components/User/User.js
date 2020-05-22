import React, { useContext } from 'react'
import './User.sass'
import SearchContext from '../../context/SearchContext'

export default function User() {
    const search = useContext(SearchContext)
    return (
        <div className="user">
            {
                search.user.full_name ? <a href={search.user.url} target="_blank">
                <img src={search.user.avatar} alt=""/>
                <p>{search.user.full_name}</p>
            </a> : null
            }
            
        </div>
    )
}
