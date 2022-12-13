import React, {useState} from "react";
import style from "./Text.module.css"

const Text = ()=> {
    const [arr, setArr] = useState([{ txt: "Поделитесь своими новостями!"}, {txt: "Вперед!!"}])
    return(
        <>
            <div>
                {arr.map((el) => (
                    <h3 className={style.txt}>{el.txt}</h3>
                    ))}
            </div>
        </>
    );
}

export default Text;