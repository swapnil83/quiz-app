import React from "react";
import './QuizRules.css';

function QuizRules() {
    return (
        <div className="quiz-rules">
            <div className="heading">Quiz Rules</div>
            <div className="highlight-section">
                <p><strong>10-Second Timer</strong></p>
                <ul>
                    <li>Each question comes with a 10-second timer.</li>
                    <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
                </ul>
            </div>
            <div className="highlight-section">
                <p><strong>Manual Navigation</strong></p>
                <ul>
                    <li>You can navigate to the next question manually before the timer expires.</li>
                    <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
                </ul>
            </div>
            <div className="highlight-section">
                <p><strong>Final Score and Performance Message</strong></p>
                <ul>
                    <li>After all questions are answered, your final score will be displayed.</li>
                    <li>Based on your performance, you will receive a personalized message:</li>
                    <ul>
                        <li>Great job!: If you score <span className="bold-text">above 80%.</span></li>
                        <li>Well done!: If you score <span className="bold-text">between 60% and 80%.</span></li>
                        <li>Keep practicing!: If you score <span className="bold-text">below 60%.</span></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default QuizRules;
