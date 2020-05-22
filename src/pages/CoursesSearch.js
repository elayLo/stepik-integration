import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import CoursesList from '../components/CoursesList/CoursesList'
import BottomButton from '../components/BottomButton/BottomButton'
import CoursesInput from '../components/CoursesInput/CoursesInput'
import SearchContext from '../context/SearchContext'
import Modal from '../components/Modal/Modal'
import User from '../components/User/User'

export default function CoursesSearch() {
    const search = useContext(SearchContext)
    const [modalOpen, setModalOpen] = useState(false)
    const redirectUrl = process.env.REDIRECT_URL || 'http://localhost:3000/redirect'
    return (
        <div>

            <Navbar title="Система поддержки курса “Машинное обучение”" />
            {
                search.user.full_name ? <div>
                    <User />
                    <CoursesInput bottom={true} />
                    {
                        modalOpen ? <Modal closeModal={setModalOpen} /> : null
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
                    : <div className="bottom-button">
                        <p>Перед использованием сервиса, нужно авторизоваться</p>
                        <a href={`https://stepik.org/oauth2/authorize/?response_type=code&client_id=qkK7TLMjWPyNagYoYctrOV0bkcQxVHsVpxWBktVg&redirect_uri=${redirectUrl}`}>
                            <button>Авторизоваться через Stepik.org</button>
                        </a>

                    </div>
            }
        </div>

    )
}
