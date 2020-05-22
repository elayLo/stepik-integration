import React, { useState, useContext } from 'react'
import { Collapse } from 'react-collapse';
import './QuestionsList.sass'
import SearchContext from '../../context/SearchContext';

export default function QuestionItem(props) {
    const [isOpened, setIsOpened] = useState(false)
    const [liked, setLiked] = useState(false)
    const search = useContext(SearchContext)
    return (
        <div className="search__result" onClick={() => setIsOpened(!isOpened)}>
            <div className="search__result__title">
                <p>{props.title}</p>
            </div>
            <Collapse isOpened={isOpened} transition="height 300ms cubic-bezier(.4, 0, .2, 1)" style={{ borderColor: liked ? '#54AD54' : '#D8D8D8' }}>
                <div className="search__result__answer">
                    <p>Ответ: <span>{props.answer}</span></p>
                </div>
            </Collapse>
            <div className="search__result__bottom">
                <div className="search__result__bottom-img">
                    <img src={props.user.avatar} alt="" />
                    <p>{props.user.fullname}</p>
                </div>
                <div className="search__result__bottom-score">
                    <p>Совпадение: <span>{props.score}</span></p>
                </div>
                <div className="search__result__bottom-btn">
                    <button style={{ display: isOpened ? 'block' : 'none' }} onClick={() => {search.markQuestion(props.django_id); props.open(true)}}>Я нашел ответ</button>
                </div>
            </div>

            {
                isOpened ? null : <img src={require('./../../assets/arrow.svg')} alt="" className="search__result__arrow"/> 
            }
        </div>

    )
}
