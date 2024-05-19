// src/PromptComponent.js
import React, { useState } from 'react';
require('dotenv').config();

function PromptComponent() {
    
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });
        const data = await response.json();
        setAnswer(data.answer);
    };

    return (
        <div>
            <h1>Ask about Benefits Programs</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask question about Benefits Programs (CF/CW/MC/GR)"
                />
                <button type="submit">Submit</button>
            </form>
            {answer && (
                <div>
                    <h2>Answer:</h2>
                    <pre>{JSON.stringify(answer, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default PromptComponent;
