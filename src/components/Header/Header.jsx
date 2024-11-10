import React from 'react';
import './Header.css';
import quizLogo from '../../assets/images/QUIZMania.png';

const Header = (props) => {
    const { enableExitAction, setEnableExitAction, inputData, setInputData, quizStart, setQuizStart } = props;

    const handleExitAction = () => {
        setEnableExitAction(false);
        setQuizStart(false);
        setInputData({
            fullName: '',
            category: ''
        })
        window.history.back();
    };

    return (
        <header>
            <img src={quizLogo} alt='Logo' className='responsive-logo' />
            {
                enableExitAction &&
                <button className='exit-action' onClick={handleExitAction}>Exit Quiz</button>
            }
            {
                quizStart && !enableExitAction && inputData.fullName &&
                <div className='candidate-profile'>
                    <span className='initial-letter'>{[...inputData.fullName].at(0)}</span>
                    <span className='full-name'>{inputData.fullName}</span>
                </div>
            }
        </header>
    )
}

export default Header