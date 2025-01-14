import Card from '../components/card.jsx';
import '../components/card.css'; 
import '../index.css'

function Design(){

    const cardDataSets = [
        {
            id: "brewcareer",
            cover: '/brewcareer.png',
            subtitle: 'brewcareer',
            desc: 'networking, but make it a little less intimidating and a little more intuitive, won 2nd @ CTRL + Y designathon 2023 🏆',
            tags: ['design','web app','figma'],

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
