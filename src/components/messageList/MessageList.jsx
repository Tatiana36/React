import PropTypes from 'prop-types'
import classes from './MessageList.module.css'
export function MessageList ({messages}) {

    return (
        <>
            <h1>Сообщение</h1>
            <ul>
                {messages.map((item, index) => (
                    <li className={classes.li} key={index}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}

MessageList.propTypes = {
    messages: PropTypes.array
}