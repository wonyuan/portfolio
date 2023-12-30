import Card from '../components/card.jsx';
import { Link } from 'react-router-dom';
import '../components/card.css'; 
import '../index.css'

function Project(){

    const cardDataSets = [
        {
            id: 'directu',
            cover: '/directu.png',
            subtitle: 'directu',
            desc: 'your degree without the hassle',
            tags: ['web dev', 'react', 'flask','python','cohere'],
          },
          {
            id: '',
            cover: '',
            subtitle: 'card2',
            desc: 'Description for Card 2.',
            tags: [],
          },
          {
            id: 'reverie',
            cover: '/reverie.png',
            subtitle: 'reverie',
            desc: 'streamlining all your study needs',
            tags: ['web dev', 'productivity', 'react'],
          },
          {
            id: 4,
            cover: '',
            subtitle: 'card 4',
            blurb: 'Description for Card 3.',
            tags: [],

          },
      ];
    
      return (
        <>
        <p className='title'> it's coming together</p>

        <div className='card-box'>
          {cardDataSets.map((cardData, index) => (
            <div className='card-boxes' key={index}>
              <Card 
                path="/projects"
                id={cardData.id}
                cover={cardData.cover}
                subtitle={cardData.subtitle}
                desc={cardData.desc}
                tags={cardData.tags}

              />
            </div>
          ))}
          
        </div>
        
        </>
      );
}

export default Project;
