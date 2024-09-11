import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    // Count words
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);

    // Count letters
    const letters = inputText.replace(/[^a-zA-Z]/g, '');
    setLetterCount(letters.length);
  };

  return (
    <div className="container">
      <h1>Word and Letter Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
      />
      <div className="output">
        <p>Total Words: <span>{wordCount}</span></p>
        <p>Total Letters: <span>{letterCount}</span></p>
      </div>
    </div>
  );
}

export default App;