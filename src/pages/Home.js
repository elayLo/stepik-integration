import React, { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchInput from '../components/SearchInput/SearchInput'
import QuestionsList from '../components/QuestionsList/QuestionsList'
import BottomButton from '../components/BottomButton/BottomButton'
import SearchContext from '../context/SearchContext'
import User from '../components/User/User'

export default function Home() {
    const search = useContext(SearchContext)
    const redirectUrl = process.env.REDIRECT_URL || 'http://localhost:3000/redirect'
    return (
        <div>
            <Navbar title="Система поддержки курса “Машинное обучение”" />
            {
                search.user.full_name ? <div>
                    <User />
                    <SearchInput bottom={true} />
                    {
                        (search.questionResponse.length && Array.isArray(search.questionResponse)) ? <div>
                            <QuestionsList />
                            <BottomButton small="Не нашли похожий вопрос?" button="Давайте поищем среди материалов курса" onClick={console.log()} link="/courses" />
                        </div> : null

                    }
                </div> : <div className="bottom-button">
                        <p>Перед использованием сервиса, нужно авторизоваться</p>
                        <a href={`https://stepik.org/oauth2/authorize/?response_type=code&client_id=qkK7TLMjWPyNagYoYctrOV0bkcQxVHsVpxWBktVg&redirect_uri=${redirectUrl}`}>
                            <button>Авторизоваться через Stepik.org</button>
                        </a>
                    </div>

            }


        </div>
    )
}
