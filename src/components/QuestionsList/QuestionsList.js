import React, { useContext } from 'react'
import './QuestionsList.sass'
import SearchContext from '../../context/SearchContext'
import QuestionItem from './QuestionItem'

export default function QuestionsList() {
    const search = useContext(SearchContext)
    return (
        <div className="search__results">
            <p className="search__results__title">Система подобрала похожие вопросы</p>
            {
                search.questionResponse.data !== [] ? 
                search.questionResponse.map(item => (
                    <QuestionItem {...item} key={item.id}/>
                )) : <p>loading</p>
            }
        </div>
    )
}
