import React from "react";
import { useState } from "react";

const initialState = [
    {author: 'Дмитрий', text: 'Привет'},
    {author: 'Олег', text: 'Как дела?'},
    {author: 'Карина', text: 'Я на море.'},
    {author: 'Сергей', text: 'Пока.'},
];


function MessageList() {
    const [messageList, setMessageList] = useState(initialState);

    return(
        <div>
            {messageList.map((el) =>{
                return  <Message key={el.author} item={el} />
            })}
        </div>

    );
}

function Message(props) {
    const { item } = props

    return (
        <div>
            <p>Автор:{item.author}</p>
            <p>Сообщение:{item.text}</p>
        </div>
    )
}

export default MessageList;