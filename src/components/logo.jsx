import React, { useState } from 'react';
import sun from '/src/assets/sun.svg';
import moon from '/src/assets/moon.svg';

const ToggleTheme = () => {
  const [isImage1, setIsImage1] = useState(true);

  const handleClick = () => {
    setIsImage1(!isImage1);
  };

  return (
    <div onClick={handleClick}>
      {isImage1 ? (
        <img src={sun} alt="sun" />
      ) : (
        <img src={moon} alt="moon" />
      )}
    </div>
  );
};

export default ToggleTheme;
