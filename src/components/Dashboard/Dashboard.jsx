import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import QuizRules from '../QuizRules/QuizRules';
import './Dashboard.css';

const Dashboard = (props) => {
    const { inputData, setInputData, isModalOpen, setIsModalOpen, setEnableExitAction, setQuizStart } = props;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputData({
            ...inputData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnableExitAction(true);
        setQuizStart(true)
        navigate('/quiz');
    };

    const isFormValid = inputData.fullName && inputData.category;
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='dashboard'>
            <div className='greeting'>Welcome to <span className='initial-word'>QUIZ</span><span className='last-word'>Mania</span></div>
            <div className='rules'>
                <div>Please read all the rules about this quiz before you start.</div>
                <div className='rules-info' onClick={openModal}>Quiz rules</div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <QuizRules />
                </Modal>
            </div>
            <form className='form-container' onSubmit={handleSubmit}>
                <div className="user-input">
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" id="fullName" placeholder="Full Name" name="fullName" onChange={handleChange} />
                </div>
                <div className="topic-selection">
                    <p>Please select topic to continue</p>
                    <div className="topics">
                        {
                            ['JavaScript Basics', 'Angular Basics', 'React.js Advance', 'Flutter'].map((topicName, id) => {
                                return(
                                    <label key={id}>
                                        <input 
                                            type="radio" 
                                            name="category"
                                            value={topicName}
                                            onChange={handleChange} 
                                        /> {topicName}
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>
                <button 
                    className={isFormValid ? 'start-quiz-button' : 'button-disabled' }
                >
                    Start Quiz
                </button>
            </form>
        </div>
    )
}

export default Dashboard