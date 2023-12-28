// logo.jsx
import React, { useContext } from 'react';
import { useTheme } from '../Theme.jsx';
import sun from '/src/assets/sun.svg';
import moon from '/src/assets/moon.svg';

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
