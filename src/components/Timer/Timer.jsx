import React, { useState, useEffect } from "react";
import './Timer.css';

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
    const [hasTimeElapsed, setHasTimeElapsed] = useState(false);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000);
            return () => clearInterval(timerId);
        } else if (timeLeft === 0 && !hasTimeElapsed) {
            setHasTimeElapsed(true);
            onTimeUp();
        }
    }, [timeLeft, setTimeLeft, onTimeUp, hasTimeElapsed]);

    useEffect(() => {
        if (timeLeft > 0 && hasTimeElapsed) {
            setHasTimeElapsed(false);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return <div className="timer">{formatTime(timeLeft)}</div>;
};

export default Timer;