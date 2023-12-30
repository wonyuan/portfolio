// logo.jsx
import React, { useContext } from 'react';
import { useTheme } from '../Theme.jsx';
import sun from '/sun.svg';
import moon from '/moon.svg';



const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme}>
      {theme === 'sun' ? (
        <img src={sun} alt="sun" />
      ) : (
        <img src={moon} alt="moon" />
      )}
    </div>
  );
};

export default ToggleTheme;
