import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { Form } from '../../form/Form'
import { MessageList } from '../../messageList/MessageList'
import { ChatList} from '../../chatList/ChatList'

import { AUTHOR } from '../../constants'


export function Chat ({onAddChat, onAddMessage, messages, chats}) {

    const {chatId} = useParams()



    useEffect(() => {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.bot,
                    text: 'Я бот'
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (massage) => {
        if (chatId) {
            onAddMessage(chatId, massage)
        }
    }

    if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }

    return (
        <>
            <h1>Добро пожаловать в чат</h1>
            <ChatList chats={chats} onAddChat={onAddChat} />
            <Form addMessage={handleAddMessage} />
            <MessageList messages={chatId ? messages[chatId] : []} />
        </>
    )
}

