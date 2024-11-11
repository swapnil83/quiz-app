import React from "react";
import './QuestionProgressBar.css';

const QuestionProgressBar = (props) => {
    const totalQuestions = 10;
    const { currentQuestion } = props;

    const progress = (currentQuestion / totalQuestions) * 100;

    return (
        <div className="question-progress-bar">
            <div className="progress">
                <span><span className="current-question">{currentQuestion}</span> / <span className="total-questions">{totalQuestions}</span></span>
            </div>
            <div className="bar-container">
                <div
                    className="filled-bar"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default QuestionProgressBar;
