import React from 'react';
import goodResultLogo from '../../assets/images/goodResultLogo.png';
import poorResultLogo from '../../assets/images/poorResultLogo.png';
import { useNavigate } from 'react-router-dom';
import './QuizResult.css';

const QuizResult = ({ score, unanswered, onRetakeQuiz }) => {
    const navigate = useNavigate();

    const failed = 10 - score - unanswered;
    const percentage = (score / 10) * 100;

    const resultLogo = percentage >= 60 ? goodResultLogo : poorResultLogo;
    const isGoodScore = percentage >= 60;

    const handleRetakeAction = () => {
        onRetakeQuiz();
        navigate('/');
    };

    return (
        <div className='quiz-result'>
            <div className='top-section'>
                <img
                    src={resultLogo}
                    alt={isGoodScore ? 'Good Result' : 'Poor Result'}
                />
                {isGoodScore ? (
                    <>
                        <div className='appreciation-word'>CONGRATULATIONS</div>
                        <div className='appreciation-message'>You successfully completed the Quiz and hold</div>
                    </>
                ) : (
                    <>
                        <div className='appreciation-message'>You successfully completed the Quiz but you need to</div>
                        <div className='appreciation-word'>KEEP PRACTICING!</div>
                    </>
                )}
            </div>
            <div className={`middle-section ${!isGoodScore ? 'failed' : ''}`}>
                <p>Your Score</p>
                <div className={`score ${!isGoodScore ? 'failedCount' : ''}`}>{percentage}%</div>
                {isGoodScore && <div className='score-message'>Great job!</div>}
            </div>
            <div className='bottom-section'>
                <p>Out of 10 questions</p>
                <div className='result-container'>
                    <div className='count'>
                        <span className='good'>{score}</span>
                        <p>Correct</p>
                    </div>
                    <div className='count'>
                        <span className='average'>{failed}</span>
                        <p>Incorrect</p>
                    </div>
                    <div className='count'>
                        <span className='poor'>{unanswered}</span>
                        <p>Not Answered</p>
                    </div>
                </div>
            </div>
            <button className='retake-action' onClick={handleRetakeAction}>Retake Quiz</button>
        </div>
    );
}

export default QuizResult;