import React, { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchInput from '../components/SearchInput/SearchInput'
import QuestionsList from '../components/QuestionsList/QuestionsList'
import BottomButton from '../components/BottomButton/BottomButton'
import SearchContext from '../context/SearchContext'

export default function Home() {
    const search = useContext(SearchContext)
    return (
        <div>
            <Navbar title="Система поддержки курса “Машинное обучение”" />
            <SearchInput bottom={true} />
            {
                (search.questionResponse.length && Array.isArray(search.questionResponse)) ? <div>
                    <QuestionsList />
                    <BottomButton small="Не нашли похожий вопрос?" button="Давайте поищем среди материалов курса" onClick={console.log()} link="" />
                </div> : null
                    
            }

        </div>
    )
}
