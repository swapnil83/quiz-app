import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import QuizPage from './components/QuizPage/QuizPage';
import './App.css';

function App() {
    const [inputData, setInputData] = useState({
        fullName: '',
        category: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='app'>
            <Header />
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
                            />
                        } 
                    />
                    <Route
                        path='/quiz'
                        element={
                            <QuizPage />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
