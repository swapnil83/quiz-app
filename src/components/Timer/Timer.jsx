import React, { useEffect } from "react";
import './Timer.css';

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timerId = setInterval(() => setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, setTimeLeft, onTimeUp]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return <div className="timer">{formatTime(timeLeft)}</div>;
};

export default Timer;