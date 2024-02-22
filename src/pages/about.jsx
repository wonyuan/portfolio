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
        '/gonghang.jpeg',
        '/richmond.png',
        '/haeundae.jpeg',
      ];

      const night = [
        '/cheongju.jpeg',
        '/hangang.jpeg',
        '/night.jpg',
      ];
      
      const handleImageClick = () => {
        if (theme === 'sun') {
          setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % morning.length);
        } else {
          setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % night.length);
        }
      };

      const currentImage = theme === 'sun' ? morning[currentImageIndex] : night[currentImageIndex];


    return(
        <>
            {theme === 'sun' ? (
                <img src={currentImage}
                className="abt-img"
                onClick={handleImageClick}
                style={{ border: '3px solid #715555', overflow: 'hidden', objectFit: 'cover'}}/>
                ) : (
                <img src={currentImage}
                className="abt-img"
                onClick={handleImageClick}
                style={{ border: '3px solid #D8D8D8',overflow: 'hidden', objectFit: 'cover'}}/>
            )}
            <p style={{ margin: '10px 0px 0px 0px' }}> ♪♫•*¨*•.¸¸♫♪ </p>
            <p style={{ margin: '10px 0px 0px 0px' }}>
              hi there! i'm currently a 2nd year software engineering student studying
              at <a style={{ textDecoration:'underline' }} href="https://mcmaster.ca">mcmaster university</a>, in hamilton, ontario.
              <br/>
              <br/>
              when i'm not learning about how to be a better software engineer, you can find me swimming, learning more about sustainability and system designs,
              and indulging in creative disciplines :) (i've got a deep love for world exploration games and design) 
              <br/>
              <br/>
              i'm also currently:
              <ul>
                <li>
                a design executive at  <a style={{ textDecoration:'underline' }} href="https://mcmasterdesignleague.com">mcmaster design league</a>
                , helping curate a memorable experience for the largest
                design competition in north america!
                </li>
                <li>
                a design executive at <a style={{ textDecoration:'underline' }} href="https://deltahacks.com">deltahacks</a>, 
                one of the largest student run hackathons, taking place at mcmaster, where i'm also currently designing the visual experience for hackers.
                </li>
              </ul>
            </p>
            <p style={{ margin: '10px 0px 15px 0px' }}> ♪♫•*¨*•.¸¸♫♪ </p>
        </>
    ) 

    /*interactable stickers of pixel foods ;0*/
}

export default About;