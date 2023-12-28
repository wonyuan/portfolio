import Card from '../components/card.jsx';
import '../components/card.css'; 
import '../index.css'

function Design(){

    const cardDataSets = [
        {
            id: "brewcareer",
            cover: '/src/assets/brewcareer.png',
            subtitle: 'brewcareer',
            desc: 'networking, but make it a little less intimidating and a little more intuitive',
            tags: ['design','app','figma'],

          },
          {
            id: 2,
            cover: '',
            subtitle: 'Card 2 Subtitle',
            desc: 'Description for Card 2.',
            tags: [],

          },
          {
            id: 3,
            cover: '',
            subtitle: 'Card 3 Subtitle',
            desc: 'Description for Card 3.',
            tags: ['Web Development', 'Education', 'React'],

          },
      ];
    
      return (
        <>
        <p className='title'> gone fishing 🎣 </p>

        <div className='card-box'>
          {cardDataSets.map((cardData, index) => (
            <div className='card-boxes-des' key={index}>
              <Card 
                path="/design"
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

export default Design;
