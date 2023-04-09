import React, { useState } from "react";

import { choice } from "./random";
import "./EightBall.css";
import resp from "./answers.json";


function EightBall({ answers = resp }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black"
    });

    function handleClick(e) {
        setAnswer(choice(answers))
    };

    return (
        <div className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}>
            <b>{answer.msg}</b>
        </div>

    )
}

export default EightBall;