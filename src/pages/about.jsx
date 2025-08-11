import { useContext, useState } from 'react';
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

    const previousInternships = [
      {
        company: 'RBC Borealis',
        role: 'Software Engineer Intern',
        desc: 'etc',
        date: 'Summer 2025',
        image: 'boreal.png'
      },
      {
        company: 'Develop For Good',
        role: 'Software Engineer',
        desc: 'etc',
        date: 'Fall 2024 - Winter 2025',
        image: 'coved.jpg'
      },
      {
        company: 'Euna Solutions',
        role: 'Software Engineer Intern',
        date: 'Summer 2024',
        desc: 'etc',
        image: 'euna.png'
      },
      {
        company: 'McMaster Engineering Society',
        role: 'Full-stack Developer',
        date: 'Summer 2024',
        desc: 'etc',
        image: 'mes.jpg'
      }
    ];

    const morning = [
        '/gonghang.jpeg',
        '/richmond.png',
        '/haeundae.jpeg',
      ];

      const night = [
        '/cheongju.jpeg',
        '/hangang.jpeg',
      ];
      
      const handleImageClick = () => {
        if (theme === 'sun') {
          setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % morning.length);
        } else {
          setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % night.length);
        }
      };

      const currentImage = theme === 'sun' ? morning[currentImageIndex] : night[currentImageIndex];

    return (
      <>
        {theme === 'sun' ? (
          <img
            src={currentImage}
            className="abt-img"
            onClick={handleImageClick}
            style={{ border: '2px solid #715555', overflow: 'hidden', objectFit: 'cover' }}
          />
        ) : (
          <img
            src={currentImage}
            className="abt-img"
            onClick={handleImageClick}
            style={{ border: '2px solid #D8D8D8', overflow: 'hidden', objectFit: 'cover' }}
          />
        )}
        <p style={{ color: "var(--color-secondary)" }}>
          {/* <i>some of my favourite photos</i> */}
        </p>
        <p style={{ margin: '10px 0px 0px 0px' }}> ♪♫•*¨*•.¸¸♫♪ </p>
        <p style={{ margin: '10px 0px 0px 0px' }}>
          what i've been up to >>
          <br />
<div className="internship-column">
  {previousInternships.map((internship, index) => (
    <div key={index} className="internship-row">
      <div className="internship-img">
        <img
          src={internship.image}
          alt={internship.company}
          style={
            internship.image === 'euna.png'
              ? {
                  width: 56,
                  height: 56,
                  objectFit: 'cover', // fill and crop for euna.png
                  borderRadius: 8,
                  background: 'none',
                  display: 'block'
                }
              : {
                  width: 56,
                  height: 56,
                  objectFit: 'cover', // fill the box, cropping if needed
                  borderRadius: 8,
                  background: 'none'
                }
          }
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="internship-info">
        <div className="internship-company-name">{internship.company}</div>
        <div className="internship-role" style={{ color: 'var(--color-secondary)', fontWeight: 400 }}>{internship.role}</div>
      </div>
            <div
        className="internship-divider"
        style={{
          flex: 2, // Make the divider take up more space
          borderBottom: '1px dashed #bbb',
          height: 0,
          minWidth: 40 // Increase minWidth for a longer divider
        }}
      />
      <div className="internship-date">{internship.date || "2022"}</div>
    </div>
  ))}
</div>
        </p>
        <p style={{ margin: '10px 0px 15px 0px' }}> ♪♫•*¨*•.¸¸♫♪ </p>
        <style>{`
          .internship-column {
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin: 18px 0;
          }
          .internship-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .internship-img {
            flex: 0 0 auto;
          }
          .internship-info {
            // display: flex;
            flex-direction: column;
            min-width: 0;            /* Allow shrinking */
            // flex: 1 1 auto;          /* Allow to grow and shrink */
            word-break: break-word;  /* Wrap long words */
            white-space: normal;     /* Allow normal wrapping */
            width: fit-content;      /* Only as wide as the content inside */
            max-width: 100%;         /* Prevent overflow */
          }
          .internship-company-name {
            font-size: 0.95em;
          }
          .internship-role {
            font-size: 0.9em;
            color: var(--color-secondary);
          }
          .internship-divider {
            flex: 4 1 auto;         /* Increase flex for a longer divider */
            color: var(--color-secondary);
            font-family: monospace;
            font-size: 0.8em;
            letter-spacing: 2px;
            user-select: none;
            // min-width: 120px;       /* Ensure a longer minimum length */
          }
          .internship-date {
            flex: 0 0 auto;
            font-size: 0.90em;
            color: var(--color-secondary);   
            min-width: 60px;
            text-align: right;
          }
        `}</style>
      </>
    );

    /*interactable stickers of pixel foods ;0*/
}

export default About;