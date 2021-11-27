// External Dependencies
import { useCallback, useState } from 'react';
import { SayButton } from 'react-say';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// Internal Dependencies
import logo from './logo.svg';
import './App.css';
import { spellingBank } from './constants/data';

// Local Variables
const StyledButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#C34CFF',
    border: '1px solid #C34CFF',
    borderRadius: '2rem',
    boxShadow: '0 0 0 4px #C34CFF',
    color: '#111',
  },
  backgroundColor: '#C34CFF',
  border: '1px solid #C34CFF',
  borderRadius: '2rem',
  boxShadow: '0 0 0 0 #C34CFF',
  color: '#111',
  transition: 'all 0.2s ease-out',
});

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
        <h1 className="neonText">Spelling Champ</h1>

        <Stack spacing={2}>
          <SayButton
            pitch={1.2}
            rate={0.6}
            speak={currentWord}
            voice={samanthaVoice}
          >
            Say something nice
          </SayButton>

          <StyledButton
            onClick={handlePressButton}
            variant="outlined"
          >
            Change word
          </StyledButton>
        </Stack>
      </header>
    </div>
  );
}

export default App;
