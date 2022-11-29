import React from "react";
import style from "./Message.module.css";
import Text from "./../Text/Text"


const Message = ()=> {
    return(
        <>
            <div>
                <p className={style.txt}>Я изучаю React</p>
            </div>
            <Text />
            </>
    );
}

export default Message;