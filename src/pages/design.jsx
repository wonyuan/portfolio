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
            tags: ['figma','design','web app','networking'],

          },
          {
            id: "propellearn",
            cover: '/propellearn.png',
            subtitle: 'propellearn',
            desc: "education isn't stagnant. pinpoint your weak spots, track your growth, and propel your teaching forwards. [a case study] ",
            tags: ['figma','design', 'user research','web app', 'education'],

          },
          /*{
            id: "mdl",
            cover: '/testing.png',
            subtitle: "graphics for the mdl cadathon 2024",
            desc: "the adventure-based pixel world that another designer and i created in promotion of the mdl cadathon 2024.",
            tags: ['figma','graphic design', 'pixel art','aesprite'],
          }*/
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
          <div className='card-boxes-des'>
            <img src='/testing.png'
              className="proj-img"
              style={{ width:'100%', height:'100%', overflow: 'visible', objectFit: 'cover'}}
            />
            <Card 
              path="/design"
              id="mdl"
              subtitle='graphics for the mdl cadathon 2024'
              desc='an adventure-based pixel world created in promotion of the mdl cadathon 2024. [each square is an individual poster!]'
              tags={['figma','graphic design', 'pixel art','aesprite']}
            />
          </div>
        </div>
        
        </>
      );
}

export default Design;
