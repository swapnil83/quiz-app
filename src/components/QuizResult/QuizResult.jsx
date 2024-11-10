import React, { Fragment } from 'react';
import './QuizResult.css';
import goodResultLogo from '../../assets/images/goodResultLogo.png';
import poorResultLogo from '../../assets/images/poorResultLogo.png';
import { useNavigate } from 'react-router-dom';

const QuizResult = (props) => {
    const navigate = useNavigate();
    const { score = 8, unanswered = 1 } = props;
    const failed = 10 - score - unanswered;
    const percentage = (score / 10) * 100;
    let resultLogo;

    if (percentage >= 80) {
        resultLogo = goodResultLogo;
    } else if (percentage < 80 && percentage >= 60) {
        resultLogo = goodResultLogo;
    } else if (percentage < 60) {
        resultLogo = poorResultLogo;
    }

    const handleRetakeAction = () => {
        navigate('/');
    };

    return (
        <div className='quiz-result'>
            <div className='top-section'>
                <img src={resultLogo} alt='Good Result' />
                {
                    ((percentage >= 80) || (percentage < 80 && percentage >= 60))
                    &&
                    <Fragment>
                        <div className='appreciation-word'>CONGRATULATIONS</div>
                        <div className='appreciation-message'>You successfully completed the Quiz and holds</div>
                    </Fragment>
                }
                {
                    (percentage < 60)
                    &&
                    <Fragment>
                        <div className='appreciation-message'>You successfully completed the Quiz but you need to</div>
                        <div className='appreciation-word'>KEEP PRACTICING!</div>
                    </Fragment>
                }
            </div>
            <div className={`middle-section ${(percentage < 60) ? 'failed' : ''}`}>
                <p>Your Score</p>
                <div className={`score ${(percentage < 60) ? 'failedCount' : ''}`}>{percentage}%</div>
                {
                    ((percentage >= 80) || (percentage < 80 && percentage >= 60))
                    &&
                    <div className='score-message'>Great job!</div>
                }
            </div>
            <div className='bottom-section'>
                <p>Out of 10 question</p>
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
    )
}

export default QuizResult;