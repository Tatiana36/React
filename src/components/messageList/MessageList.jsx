import React from "react";
import { useState } from "react";

const initialState = [ {author: 'Дмитрий', text: 'Привет'},
    {author: 'Олег', text: 'Как дела?'},
    {author: 'Карина', text: 'Я на море.'},
    {author: 'Сергей', text: 'Пока.'},
];


function MessageList() {
    const [messageList, setMessageList] = useState(initialState);

    return(
        <div>
            {messageList.map((el) =>{
                return  <Message key={el.author} item={el.text} />
            })}
        </div>

    );
}

function Message(el) {
    return (
        <div>
            <p>Автор:{el.author}</p>
            <p>Сообщение:{el.text}</p>
        </div>
    )
}

export default MessageList;