import React from 'react';
import ReactDOM from "react-dom";
import './Modal.css';

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button className='close-button' onClick={onClose}>×</button>
                {children}
            </div>
        </div>,
        document.getElementById('quiz-modal')
    );
}

export default Modal