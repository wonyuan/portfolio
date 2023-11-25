import ToggleTheme from '../components/logo.jsx';
import React, { useContext, useState } from 'react';
import { ThemeContext } from "../Theme.jsx";

/* 
{theme === 'sun' ? (
        <img src="/src/assets/creek.jpg" width="380" height="300" />
      ) : (
        <img src="/src/assets/fish.gif"  width="400" height="auto" />
      )}
*/

function About(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const morning = [
        '/src/assets/me.jpeg',
        '/src/assets/gonghang.jpeg',
        '/src/assets/richmond.png',
        '/src/assets/haeundae.jpeg',
        '/src/assets/jeju.jpeg',
      ];

      const night = [
        '/src/assets/me2.jpg',
        '/src/assets/cheongju.jpeg',
        '/src/assets/hangang.jpeg',
        '/src/assets/night.jpg',
      ];
      
      const handleImageClick = () => {
        if (theme === 'sun') {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % morning.length);
        } else {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % night.length);
        }
      };

      const currentImage = theme === 'sun' ? morning[currentImageIndex] : night[currentImageIndex];


    return(
        <>
            {theme === 'sun' ? (
                <img src={currentImage}
                className="abt-img"
                onClick={handleImageClick}
                style={{ border: '1px solid #362d25', overflow: 'hidden', objectFit: 'cover'}}/>
                ) : (
                <img src={currentImage}
                className="abt-img"
                onClick={handleImageClick}
                style={{ border: '1px solid white',overflow: 'hidden', objectFit: 'cover'}}/>
            )}
            <p style={{ margin: '10px 0px 0px 0px' }}> ♪♫•*¨*•.¸¸♫♪ (switch the theme!) </p>
            <hr class="dash" />
            <h2>about</h2>
            <p style={{ margin: '10px 0px 0px 0px' }}>
              hi there! i'm currently a soph student studying software engineering
              at mcmaster university, 
              <br/>
              <br/>
              i'm also currently in some fun clubs 
              <ul>
                <li>
                graphics executive at mcmaster design league, helping curate
                memorable designs and themations for the largest
                design competition in north america!
                </li>
                <li>
                design graphics and themeing for deltahacks, 
                a mcmaster student run hackathon
                </li>
              </ul>
            </p>
            <hr class="dash" />
        </>
    ) 

    /*interactable stickers of pixel foods ;0*/
}

export default About;