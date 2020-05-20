import React, { useContext } from 'react'
import './CoursesList.sass'
import SearchContext from '../../context/SearchContext'
import CoursesItem from './CoursesItem'

export default function CoursesList() {
    const search = useContext(SearchContext)
    return (
        <div className="search__results">
            <p className="search__results__title">Система подобрала похожие вопросы</p>
            {
                search.coursesResponse.data !== [] ? 
                search.coursesResponse.map(item => (
                    <CoursesItem {...item} key={item.id}/>
                )) : <p>loading</p>
            }
        </div>
    )
}
