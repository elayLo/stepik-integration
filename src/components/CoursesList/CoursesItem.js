import React, { useState, useContext } from 'react'
import { Collapse } from 'react-collapse';
import './CoursesList.sass'
import SearchContext from '../../context/SearchContext';

export default function CoursesItem(props) {
    const [isOpened, setIsOpened] = useState(false)
    const [liked, setLiked] = useState(false)
    const search = useContext(SearchContext)
    return (
        <div className="search__result" onClick={() => setIsOpened(!isOpened)}>
            <div className="search__result__title">
                <p>{props.lesson_name}</p>
            </div>
            <Collapse isOpened={isOpened} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" style={{ borderColor: liked ? '#54AD54' : '#D8D8D8' }}>
                <div className="search__result__answer">
                    <p>Ответ: <span>{props.content}</span></p>
                </div>
            </Collapse>
            <div className="search__result__bottom">
                <div className="search__result__bottom-score search__result__bottom-score_first">
                    <p>Совпадение: <span>{props.score}</span></p>
                </div>
                <div className="search__result__url">
                    <a href={props.url} target="_blank">Смотреть на Stepik.org</a>
                </div>
                <div className="search__result__bottom-btn">
                    <button style={{ display: isOpened ? 'block' : 'none' }} onClick={() => {search.markCourse(props.django_id)}}>Я нашел ответ</button>
                </div>
            </div>

            {
                isOpened ? null : <img src={require('./../../assets/arrow.svg')} alt="" className="search__result__arrow"/> 
            }
        </div>

    )
}
