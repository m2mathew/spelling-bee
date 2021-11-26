// External Dependencies
import { useCallback, useState } from 'react';
import { SayButton } from 'react-say';

// Internal Dependencies
import logo from './logo.svg';
import './App.css';
import { spellingBank } from './constants/data';

// Local Variables

// Component Definition
function App() {
  const randomStartWord = spellingBank[Math.floor(Math.random() * spellingBank.length)]

  const [currentWord, setCurrentWord] = useState(randomStartWord);

  const samanthaVoice = useCallback(voices => [...voices].find(v => v.name === 'Samantha'), []);

  const handlePressButton = useCallback(() => {
    const randomWord = spellingBank[Math.floor(Math.random() * spellingBank.length)]

    setCurrentWord(randomWord);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <SayButton
          pitch={1.2}
          rate={0.6}
          speak={currentWord}
          voice={samanthaVoice}
        >
          Say something nice
        </SayButton>

        <button onClick={handlePressButton}>Change word</button>
      </header>
    </div>
  );
}

export default App;
