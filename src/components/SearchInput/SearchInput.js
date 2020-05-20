import React from 'react'
import './SearchInput.sass'

export default function SearchInput() {
    return (
        <div className="search">
            <p>Интересующий вас вопрос</p>
            <div>
                <input type="text" placeholder="Введите ващ запрос"/>
            </div>
        </div>
    )
}
