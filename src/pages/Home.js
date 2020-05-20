import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchInput from '../components/SearchInput/SearchInput'
import QuestionsList from '../components/QuestionsList/QuestionsList'

export default function Home() {
    return (
        <div>
            <Navbar title="Система поддержки курса “Машинное обучение”"/>
            <SearchInput bottom={true}/>
            <QuestionsList/>
        </div>
    )
}
