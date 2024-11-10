import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }
        const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, setTimeLeft, onTimeUp]);

    return <div>Time Left: {timeLeft}s</div>;
};

export default Timer;