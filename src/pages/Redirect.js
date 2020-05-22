import React, { useContext, useEffect } from 'react';
import queryString from 'query-string';
import SearchContext from '../context/SearchContext';
import { useHistory } from 'react-router-dom';

export default function RedirectPage(props) {
    let history = useHistory();
    let params = queryString.parse(props.location.search);
    const search = useContext(SearchContext)
    if (params.code !== '') {
        search.setTokenStr(params.code)
        search.fetchUser(search.token)
        setTimeout(() => {
            history.push('/')
        }, 2000)
    }
    return (
        <div className="redirect">
            {/*<p>{new URLSearchParams(props.location.search).get("code")}</p>*/}
        </div>
    )
}
