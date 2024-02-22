import React, { useState, useEffect } from 'react';

const TypingComp = ({ words, colors }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1150);

    return () => clearInterval(typingInterval);
  }, [words]);

  useEffect(() => {
    const typeWord = () => {
      setCurrentWord(words[currentWordIndex]);
      setCurrentColor(colors[currentWordIndex]);
    };

    const typeWordInterval = setInterval(typeWord, 100);

    return () => clearInterval(typeWordInterval);
  }, [currentWordIndex, words, colors]);

  return <span style={{ color: currentColor }}>{currentWord}</span>;
};

function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['student', 'developer', 'designer', 'snack enthusiast'];
  const colors = ['var(--color-secondary)', 'var(--color-secondary)','var(--color-secondary)', 'var(--color-secondary)']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((wordIndex) => (wordIndex + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <>
      <h1 className="top-h1" style={{ marginBottom: '0px' }}>
        hey there,
      </h1>
      <h1 style={{ marginTop: '0px', marginBottom: '0px' }}> i'm catherine yang!</h1>
      <h3 className='spesh' style={{ marginTop: '5px' }}>
        a <TypingComp words={words} colors={colors} />
      </h3>
      <br />
      <p>
        welcome to my <i>tiny</i> section of the internet!
        <br />
        <br />
        i'm currently a 2nd year software engineering student studying at mcmaster university, hamilton, where I spend my days uncovering new technologies and creating the ideal schedule.
        <br />
        <br />
        you can reach me at yangc137@mcmaster.ca anytime
        <br />
        (or anywhere here)
        <br />
        <br />
      </p>
    </>
  );
}

export default Home;
