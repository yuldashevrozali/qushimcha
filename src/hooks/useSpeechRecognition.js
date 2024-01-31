// hooks/useSpeechRecognition.js
import { useState, useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';

const useSpeechRecognition = (props) => {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    setTranscript(props.transcript);
  }, [props.transcript]);

  return transcript;
};

export default SpeechRecognition(useSpeechRecognition);
