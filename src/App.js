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

    return (
        <div className='app'>
            <Header
                enableExitAction={enableExitAction}
                setEnableExitAction={setEnableExitAction}
                inputData={inputData}
                setInputData={setInputData}
                quizStart={quizStart}
                setQuizStart={setQuizStart}
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
                                inputData={inputData}
                            />
                        }
                    />
                    <Route
                        path='/result'
                        element={
                            <QuizResult
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
