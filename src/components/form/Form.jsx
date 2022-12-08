import PropTypes from 'prop-types'
import classes from './Form.module.css'
import { useState } from 'react';
import {AUTHOR} from "../constants";
import {Button} from "../button/Button";

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            author: AUTHOR.user,
            text
        })

        setText('')
    }

    console.log('input', text)

    return (
        <>
            <h1 className={classes.form}>Форма</h1>
            <form onSubmit={handleSubmit}>
                <input className={classes.input}
                    type="textarea"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button type="submit">Отправить</Button>

            </form>

        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}