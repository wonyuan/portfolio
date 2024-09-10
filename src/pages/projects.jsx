import Card from '../components/card.jsx';
import '../components/card.css'; 
import '../index.css'

function Project(){

    const cardDataSets = [
        {
            id: 'directu',
            cover: '/directu.png',
            subtitle: 'directu',
            desc: 'your degree without the hassle',
            tags: ['react', 'python','cohere','mongoDB'],
          },
          // {
          //   id: 'kubzco',
          //   cover: '/kubz.png',
          //   subtitle: 'kubzco design',
          //   desc: 'redesigned ecommerce front for a local toronto-owned business',
          //   tags: ['react','javascript','nodejs', 'stripe'],
          // },
          {
            id: 'linkedOut',
            cover: '/linkedout2.png',
            subtitle: 'linkedOut',
            desc: 'an any mans stepping stone to efficient networking',
            tags: ['react','typescript','python', 'cohere', 'mongoDB'],
            link: 'https://github.com/wonyuan/linkedout',
          },
          {
            id: '101districts',
            cover: '/101districts.png',
            subtitle: '101districts',
            desc: 'helping you fast track all the bad parts of vacationing',
            tags: ['react','typescript','gemini-ai', 'firebase'],
            link: 'https://github.com/wonyuan/101districts'
          },
          {
            id: 'reverie',
            cover: '/reverie.png',
            subtitle: 'reverie',
            desc: 'workspace, streamlining all your study needs',
            tags: ['web dev', 'productivity', 'react'],
            link: 'https://reverie-pomo.vercel.app',
          },
          {
            id: 'stylus',
            cover: '/stylus.png',
            subtitle: 'tectron stylus',
            desc: 'stylus designed to aid individuals with weak fine motor skills',
            tags: ['product design','arduino','inventor'],
            link: 'https://peat-forest-c80.notion.site/Project-4-Power-in-Community-460ac7d1d0c843feb87f333311bc1920?pvs=4',
          },
          // {
          //   id: 'sidealong',
          //   cover: '/white.jpeg',
          //   subtitle: 'side-along',
          //   desc: 'a friend is waiting to hear about your day...',
          //   tags: ['chrome ext','javascript'],
          // },
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
