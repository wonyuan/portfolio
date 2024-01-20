import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Return from '../components/return.jsx';
import Carousel from '../components/carousel.jsx';

/*
<FontAwesomeIcon icon={faArrowLeft} size="1x" style={{ marginRight: '30px' }}/>
<img src='/src/assets/directu.png'
                className="proj-img"
                style={{ width:'90%', height:'270px', border: '3px solid #715555', overflow: 'hidden', objectFit: 'cover'}}/>

*/

function DirectU(){
    const images = [
        '/directu.png',
        '/directu2.png',
        '/directu3.png',
        '/directu4.png',
        '/directu5.png',
        '/directu6.png',
        '/directu7.png',
        '/directu8.png'
    ]

    return(
        <>
        <div>
        <Return/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
            <h3 style={{ marginTop:'0px', marginBottom:'5px' }}> directu </h3>
        </div>
        <div>
            <a href="https://devpost.com/software/untitled-project-84yezbhn7asu" className="proj-links" target="_blank" rel="noopener noreferrer" style={{ marginBottom:'0px'}}>
                <div className="link-tag">
                    <p className="link-tag-text"> → devpost</p>
                </div>
            </a>
            <a href="https://directu.onrender.com/" className="proj-links" target="_blank" rel="noopener noreferrer" style={{ marginBottom:'0px'}}>
                <div className="link-tag">
                    <p className="link-tag-text"> → demo</p>
                </div>
            </a>
            </div>
        </div>


        <Carousel images={images}/>
        <br/>
        <p> 
        <i>
        36 hours, 2 front-end developers, 2 back-end developers
        <br/>
        [react, typescript, flask, python, mongoDB, cohere]
        </i>
        </p>
    
        <h3> preface </h3>
        <p>
        submitted as a part of hack the north 2023, our hack took on one of the
        many struggles faced by university students, course-selection.
        <br/> 
        <br/>
        by scraping previous student reviews on a range of courses from the internet
        and comparing them to a user curated profile consisting
        of their goals, learning preferences, etc, scores were then assigned and used to 
        determine the courses best fit for the individual.
        <br/>
        <h3>delivery</h3>
        <p> i took on tasks defining visual design and front-end development, utilizing figma
        and react to implement key features of our product. i was able to learn how to use a lot
        of new tools during the 48 hours, from database management and API endpoint connection.</p>
        as my very first hackathon, i learned a lot from both my teammates and myself. 
        we were even able to win first place for the <b>Best Use of Cohere</b> award out of
        248 teams which was super exciting!

        </p>
        

        </div>
        </>
    )
}

export default DirectU;