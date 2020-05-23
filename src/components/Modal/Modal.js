import React, { useContext, useState, useEffect } from 'react'
import './Modal.sass'
import SearchContext from '../../context/SearchContext'

export default function Modal(props) {
    const search = useContext(SearchContext)
    const [text, setText] = useState('')
    const [url, setUrl] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        setText(search.globalInput)
    }, [])
    return (
        <div className="modal">
            <div className="modal__main">
                <div className="modal__textarea">
                    <p className="modal__label">Интересующий вас вопрос</p>
                    <textarea placeholder="Ваш вопрос" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className="modal__input">
                    <p className="modal__label">Ссылка на урок(шаг)</p>
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Ссылка на урок"/>
                </div>
                <div className="modal__input">
                    <p className="modal__label">Ваш E-mail</p>
                    <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="modal__button">
                    <button onClick={() => {search.modalSubmit({text, email, url}); props.closeModal(false)}}>Задать вопрос</button>
                </div>
                <img src={require('../../assets/close.svg')} alt="" className="modal__close" onClick={() => props.closeModal(false)}/>
            </div>
        </div>
    )
}
