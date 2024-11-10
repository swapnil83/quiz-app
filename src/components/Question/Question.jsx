import React from "react";
import './Question.css';

const Question = ({ questionData, onAnswer }) => {
    const handleOptionClick = (index) => {
        onAnswer(index);
    };

    return (
        questionData &&
        <div className="question-container">
            <div className="question">
                <span>{questionData.id}.</span>
                <p>{questionData.question}</p>
            </div>
            <div className="options">
                {questionData.options.map((option, index) => (
                    <label key={index} onClick={() => handleOptionClick(option)}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                        /> {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Question;
