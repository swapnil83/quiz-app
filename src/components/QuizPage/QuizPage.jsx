import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { responseData as quizData } from '../../data/response';
import Timer from '../Timer/Timer';
import Question from '../Question/Question';
import QuestionProgressBar from '../QuestionProgressBar/QuestionProgressBar';
import './QuizPage.css';

const QuizPage = (props) => {
    const filteredObject = quizData.filter((data) => {
        return data.name === props.inputData.category
    });
    const questions = filteredObject[0]?.questions || [];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [unanswered, setUnanswered] = useState(0);

    const navigate = useNavigate();

    const handleNextQuestion = () => {
        console.log('checking handleNextQuestion: ', currentQuestion, questions.length - 1);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(10);
        } 
        else {
            navigate('/result');
        }
    };

    const handleAnswer = (option) => {
        console.log('checking answer', option, questions[currentQuestion].correctAnswer, option === questions[currentQuestion].correctAnswer);
        if (option === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        // handleNextQuestion();
    };

    const handleTimeUp = () => {
        setUnanswered(unanswered + 1);
        handleNextQuestion();
    };

    return (
        <div className='quiz-page'>
            {/* <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} />
            <QuestionProgressBar currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} /> */}
            <Question 
                questionData={questions[currentQuestion]} 
                onAnswer={handleAnswer} 
            />
            <div className='quiz-actions'>
                <button className='next-btn' onClick={handleNextQuestion}>Next</button>
                <button className='skip-btn' onClick={handleTimeUp}>Skip this question</button>
            </div>
        </div>
    )
}

export default QuizPage;