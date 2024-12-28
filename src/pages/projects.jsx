import Card from '../components/card.jsx';
import '../components/card.css'; 
import '../index.css'

function Project(){

    const cardDataSets = [
        {
            id: 'directu',
            cover: '/directu.png',
            subtitle: 'directu',
            desc: 'your degree without the hassle, won 1st for best use of cohere @ hack the north 2023 🏆 ',
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
            id: 'linkedout',
            cover: '/linkedout.png',
            subtitle: 'linkedout',
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
            link: 'https://101districts.vercel.app'
          },
          {
            id: 'monster royale',
            cover: '/msw.jpeg',
            subtitle: 'maple tactics',
            desc: 'a tft inspired auto chess battler game with a maplestory twist, \b \b  \b \b top 10 @ maplejam 2024',
            tags: ['lua','msw','game dev'],
            link: 'https://peat-forest-c80.notion.site/Project-4-Power-in-Community-460ac7d1d0c843feb87f333311bc1920?pvs=4',
          },
          {
            id: 'reverie',
            cover: '/reverie.png',
            subtitle: 'reverie',
            desc: 'workspace, streamlining all your study needs',
            tags: ['web dev', 'productivity', 'react'],
            link: 'https://reverie-pomo.vercel.app',
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
