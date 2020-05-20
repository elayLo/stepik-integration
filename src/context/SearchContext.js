import React from 'react'

const SearchContext = React.createContext({
    search: '',
    setSearch: (text) => {},
    searchForQuestions: (text) => {},
})

export const SearchProvider = SearchContext.Provider

export default SearchContext