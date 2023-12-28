import Card from '../components/card.jsx';
import { Link } from 'react-router-dom';
import '../components/Card.css'; 
import '../index.css'

function Project(){

    const cardDataSets = [
        {
            id: 'directu',
            cover: '/src/assets/directu.png',
            subtitle: 'directu',
            desc: 'your degree without the hassle',
            tags: ['web app', 'front-end', 'flask','python','cohere'],
          },
          {
            id: 2,
            cover: '',
            subtitle: 'card2',
            desc: 'Description for Card 2.',
            tags: [],
          },
          {
            id: 3,
            cover: '',
            subtitle: 'card 3',
            desc: 'Description for Card 3.',
            tags: ['Web Development', 'Education', 'React'],
          },
          {
            id: 4,
            cover: '',
            subtitle: 'card 4',
            blurb: 'Description for Card 3.',
            tags: ['Web Development', 'Education', 'React'],

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
