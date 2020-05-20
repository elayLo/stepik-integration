import React from 'react'

const SearchContext = React.createContext({
    coursesResponse: [],
    questionResponse: [],
    setSearch: (text) => {},
    searchForQuestions: (text) => {},
    markQuestion: (id) => {},
    searchForCoursess: (text) => {},
    markCourse: (id) => {},
})

export const SearchProvider = SearchContext.Provider

export default SearchContext