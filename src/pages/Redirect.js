import React from 'react';
import queryString from 'query-string';

export default function RedirectPage(props) {
    let params = queryString.parse(props.location.search);
    console.log(params.code);
    return (
        <div className="redirect">
            {/*<p>{new URLSearchParams(props.location.search).get("code")}</p>*/}
        </div>
    )
}
