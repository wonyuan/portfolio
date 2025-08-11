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
  const colors = ['var(--color-secondary)', 'var(--color-secondary)','var(--color-secondary)', 'var(--color-secondary)']; 

  return (
    <>
      <h1 className="top-h1" style={{ marginBottom: '0px' }}>
        hey there,
      </h1>
      <h1 style={{ marginTop: '0px', marginBottom: '0px' }}> i'm catherine yang!</h1>
      <br />
      <p>
        an engineering student living in beautiful (usually) 27°C toronto.
        <br />
        <br />
        i'm a developer/creative/student in my 3rd year of software engineering at mcmaster university, hamilton. i'm passionate about building beautiful user experiences, and <i>very</i> interested in distributed systems and open-source development! >:)
        <br />
        <br />
        you can reach me at 52cathyang at gmail dot com anytime
        <br />
        (or anywhere here)
        <br />
        <br />
      </p>
    </>
  );
}

export default Home;
