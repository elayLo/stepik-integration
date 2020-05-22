import React, { useContext, useState } from 'react'
import './QuestionsList.sass'
import SearchContext from '../../context/SearchContext'
import QuestionItem from './QuestionItem'
import Success from './../Success/Success'

export default function QuestionsList() {
    const search = useContext(SearchContext)
    const [success, setSuccess] = useState(false)
    return (
        <div className="search__results">
            <p className="search__results__title">Система подобрала похожие вопросы</p>
            {
                search.questionResponse.data !== [] ?
                    search.questionResponse.map(item => (
                        <QuestionItem {...item} open={setSuccess} key={item.id} />
                    )) : <p>loading</p>
            }
            {
                success ? <Success/> : null
            }
            
        </div>
    )
}
