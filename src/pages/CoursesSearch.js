import React, { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import CoursesList from '../components/CoursesList/CoursesList'
import BottomButton from '../components/BottomButton/BottomButton'
import CoursesInput from '../components/CoursesInput/CoursesInput'
import SearchContext from '../context/SearchContext'

export default function CoursesSearch() {
    const search = useContext(SearchContext)
    return (
        <div>
            <Navbar title="Система поддержки курса “Машинное обучение”"/>
            <CoursesInput bottom={true}/>
            {
                (search.coursesResponse.length && Array.isArray(search.coursesResponse)) ? <div>
                    <CoursesList type="courses"/>
                    <BottomButton small="Все еще не нашли то, что искали?" button="Задать вопрос преподавателю"/>
                </div> : null
                    
            }
        </div>
    )
}
