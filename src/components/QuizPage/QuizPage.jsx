import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { responseData as quizData } from '../../data/response';
import Question from '../Question/Question';
import Timer from '../Timer/Timer';
import QuestionProgressBar from '../QuestionProgressBar/QuestionProgressBar';
import './QuizPage.css';

const QuizPage = (props) => {
    const { score, setScore, unanswered, setUnanswered, inputData, setEnableExitAction } = props;
    const filteredObject = quizData.filter((data) => {
        return data.name === inputData.category
    });
    const questions = filteredObject[0]?.questions || [];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(10);

    const navigate = useNavigate();

    const handleNextQuestion = ({ isSkipped }) => {
        if (!isSkipped && selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        } else if (selectedOption === null) {
            setUnanswered(unanswered + 1);
        }

        setSelectedOption(null);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(10);
        } else {
            setEnableExitAction(false);
            // navigate('/result');
        }
    };

    const handleTimeUp = () => {
        if (currentQuestion === questions.length - 1) {
            setEnableExitAction(false);
            navigate('/result');
        } else {
            setUnanswered(unanswered + 1);
            setSelectedOption(null);
            handleNextQuestion({ isSkipped: true });
        }
    };

    return (
        <div className='quiz-page'>
            <div>
                <div className='progress-bar'>
                    <QuestionProgressBar currentQuestion={currentQuestion+1} setCurrentQuestion={setCurrentQuestion} />
                </div>
                <div className='quiz-timer'>
                    <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={(handleTimeUp)} />
                </div>
            </div>
            <Question
                questionData={questions[currentQuestion]}
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}
            />
            <div className='quiz-actions'>
                <button
                    className={selectedOption !== null ? 'next-btn' : 'next-button-disabled'}
                    onClick={() => handleNextQuestion({ isSkipped: false })}
                >
                    {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
                <button className='skip-btn' onClick={handleTimeUp}>Skip this question</button>
            </div>
        </div>
    )
}

export default QuizPage;