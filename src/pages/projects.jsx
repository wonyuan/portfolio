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
            id: 'sidealong',
            cover: '',
            subtitle: 'side-along',
            desc: 'a friend is waiting to hear about your day...',
            tags: ['chrome ext','javascript'],
          },
          {
            id: 'reverie',
            cover: '/reverie.png',
            subtitle: 'reverie',
            desc: 'workspace, streamlining all your study needs',
            tags: ['web dev', 'productivity', 'react'],
          },
          {
            id: 'stylus',
            cover: '',
            subtitle: 'tectron stylus',
            desc: 'stylus designed to aid individuals with weak fine motor skills',
            tags: ['product design','arduino','inventor'],
            link: 'https://peat-forest-c80.notion.site/Project-4-Power-in-Community-460ac7d1d0c843feb87f333311bc1920?pvs=4',
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
                link={cardData.link}
              />
            </div>
          ))}
        </div>
        
        </>
      );
}

export default Project;
