import { useState, useEffect } from 'react'
import './App.css'
import { Form } from './components/form/Form'
import { MessageList } from './components/messageList/MessageList'
import { AUTHOR} from "./components/constants";


export function App () {
    const [messages, setMessages] = useState([])

    const addMessage = (newMessage) => {
        console.log('newMessage', newMessage);
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
            <div className='app-wrapper'>
                <div className='header-color'>
                    <h1 className='app-header'>Добро пожаловать в чат!</h1>
                </div>
                <div className='app-box'>
                    <div className= 'app-nav-box'>
                     <h3 className= 'app-nav'>
                         Навигация
                     </h3>
                    </div>
                    <div className='app-form'>
                        <Form addMessage={addMessage} />
                        <MessageList messages={messages} />
                    </div>

                </div>

            </div>
        </>
    )
}

export default App