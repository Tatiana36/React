import React, {useState} from "react";
import style from "./Text.module.css"

const Text = ()=> {
    const [arr, setArr] = useState([{ txt: "Я уверенна что у меня все полусится!"}, {txt: "Спасибо за Ваш труд!!"}])
    return(
        <>
            <div>
                {arr.map((el) => (
                    <p className={style.txt}>{el.txt}</p>
                    ))}
            </div>
        </>
    );
}

export default Text;