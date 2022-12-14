import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { AUTHOR } from '../constants'
import {Button} from '../button/Button'


export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //todo...
        addMessage({
            author: AUTHOR.user,
            text
        })

        setText('')
    }

    return (
        <>
            <h1>Форма</h1>
            <form onSubmit={handleSubmit}>
                <input
                    autoFocus
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                <Button type="submit">Добавить сообщение</Button>

            </form>

        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}