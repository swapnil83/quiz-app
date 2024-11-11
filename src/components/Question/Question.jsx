import React from "react";
import './Question.css';

const Question = ({ questionData, setSelectedOption, selectedOption }) => {

    const handleOptionChange = (option) => {
        setSelectedOption(option);
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
                    <label key={index} htmlFor={`option-${index}`}>
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name={`option-${questionData.id}`}
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                        /> {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Question;
