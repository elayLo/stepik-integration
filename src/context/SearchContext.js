import React from 'react'

const SearchContext = React.createContext({
    questionResponse: [],
    setSearch: (text) => {},
    searchForQuestions: (text) => {},
    markQuestion: (id) => {},
})

export const SearchProvider = SearchContext.Provider

export default SearchContext