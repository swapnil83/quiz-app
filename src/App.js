import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import QuizPage from './components/QuizPage/QuizPage';
import QuizResult from './components/QuizResult/QuizResult';
import './App.css';

function App() {
    const [inputData, setInputData] = useState({
        fullName: '',
        category: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [enableExitAction, setEnableExitAction] = useState(false);
    const [quizStart, setQuizStart] = useState(false);
    const [score, setScore] = useState(0);
    const [unanswered, setUnanswered] = useState(0);

    const onExit = () => {
        setEnableExitAction(false);
        setInputData({
            fullName: '',
            category: ''
        });
        setQuizStart(false);
        setScore(0);
        setUnanswered(0);
    };

    const onRetakeQuiz = () => {
        setInputData({
            fullName: '',
            category: ''
        });
        setQuizStart(false);
        setScore(0);
        setUnanswered(0);
    };

    return (
        <div className='app'>
            <Header
                enableExitAction={enableExitAction}
                inputData={inputData}
                quizStart={quizStart}
                onExit={onExit}
            />
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                }}
            >
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Dashboard
                                inputData={inputData}
                                setInputData={setInputData}
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                                setEnableExitAction={setEnableExitAction}
                                setQuizStart={setQuizStart}
                            />
                        }
                    />
                    <Route
                        path='/quiz'
                        element={
                            <QuizPage
                                setEnableExitAction={setEnableExitAction}
                                inputData={inputData}
                                score={score}
                                setScore={setScore}
                                unanswered={unanswered}
                                setUnanswered={setUnanswered}
                            />
                        }
                    />
                    <Route
                        path='/result'
                        element={
                            <QuizResult
                                score={score}
                                unanswered={unanswered}
                                onRetakeQuiz={onRetakeQuiz}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
