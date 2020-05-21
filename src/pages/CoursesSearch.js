import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import CoursesList from '../components/CoursesList/CoursesList'
import BottomButton from '../components/BottomButton/BottomButton'
import CoursesInput from '../components/CoursesInput/CoursesInput'
import SearchContext from '../context/SearchContext'
import Modal from '../components/Modal/Modal'

export default function CoursesSearch() {
    const search = useContext(SearchContext)
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div>
            <Navbar title="Система поддержки курса “Машинное обучение”" />
            <CoursesInput bottom={true} />
            {
                modalOpen ? <Modal closeModal={setModalOpen}/> : null
            }

            {
                (search.coursesResponse.length && Array.isArray(search.coursesResponse)) ? <div>
                    <CoursesList type="courses" /> <div className="bottom-button">
                        <p>Все еще не нашли то, что искали?</p>
                        <button onClick={() => setModalOpen(!modalOpen)}>Задать вопрос преподавателю</button>
                    </div>
                </div> : null

            }
        </div>
    )
}
