import React from "react";
import style from "./Message.module.css";
import Text from "./../Text/Text"


const Message = ()=> {
    return(
        <>
            <div>
                <h1 className={style.txt}>Добро пожаловать в чат!</h1>
            </div>
            <Text />
            </>
    );
}

export default Message;