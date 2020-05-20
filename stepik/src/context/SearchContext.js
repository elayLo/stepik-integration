import React from 'react'

const SearchContext = React.createContext({
    search: '',
    setSearch: (text) => {}
})

export const SearchProvider = UserContext.Provider

export default SearchContext