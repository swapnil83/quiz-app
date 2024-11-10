import React, { useState } from "react";

const QuestionProgressBar = (props) => {
    const totalQuestions = 10;
    const { currentQuestion } = props;

    const progress = (currentQuestion / totalQuestions) * 100;

    return (
        <div style={{ width: "100%", padding: "10px", backgroundColor: "#f5f5f5" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{currentQuestion} / {totalQuestions}</span>
            </div>
            <div style={{ height: "8px", backgroundColor: "#e0e0e0", borderRadius: "4px", marginTop: "5px" }}>
                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        backgroundColor: "#d81b60",
                        borderRadius: "4px",
                        transition: "width 0.3s ease",
                    }}
                />
            </div>
        </div>
    );
};

export default QuestionProgressBar;
