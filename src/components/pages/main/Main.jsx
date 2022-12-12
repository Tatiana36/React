import React, { useState, useEffect } from 'react'
import { Form } from '../../form/Form';
import {MessageList} from '../../messageList/MessageList';
import { AUTHOR} from '../../constants';

 function Main () {
    const [messages, setMessages] = useState([])

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
            const timeout = setTimeout(() => {
                addMessage({
                    author: AUTHOR.bot,
                    text: 'Привет я бот'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [messages])


    return (
        <>
                    <h1 className='app-header'>Добро пожаловать в чат!</h1>
                    <div className='app-form'>
                        <Form addMessage={addMessage} />
                        <MessageList messages={messages} />
                    </div>
        </>
    )
}

export default Main