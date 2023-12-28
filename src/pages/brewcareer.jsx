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

function BrewCareer(){
    return(
        <>
        <div>
        <Return/>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h3 style={{ marginBottom: '5px' }}> brew career </h3>
        </div>
        <a href="https://www.figma.com/proto/eZaGlCx9Mp0KZoJSZDa5yD/ctrl-%2B-y?type=design&node-id=24-3147&t=aH1R2Gp5TZs30H8o-1&scaling=scale-down&page-id=21%3A63&starting-point-node-id=24%3A3147&show-proto-sidebar=1&mode=design" className="proj-links" target="_blank" rel="noopener noreferrer">
          <div className="link-tag">
            <p className="link-tag-text"> → demo</p>
          </div>
        </a>
      </div>

        <div className='prototype-container' style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <iframe
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', maxWidth: '100%' }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeZaGlCx9Mp0KZoJSZDa5yD%2Fctrl-%252B-y%3Ftype%3Ddesign%26node-id%3D24-3147%26t%3DEYZcO97oiYWybvLl-1%26scaling%3Dscale-down-width%26page-id%3D21%253A63%26starting-point-node-id%3D24%253A3147%26mode%3Ddesign" 
            allowfullscreen>
            </iframe>
        </div>
        <br/>
        <p><i>
            36 hours, 1 ux designer, 3 product designers
        </i></p>
        
        <h3> problem </h3>
        <p>
        submitted as a part of the uwaterloo's first designathon ctrl + y, the presented problem
        required us to find an empowering solution for job seekers and independent workers
        looking to find projects, networks, and ways to navigate the current job market.
        <br/>
        <br/>
        as a result of there being a diverse of pre-existing solutions in the market alr, (ex.
        ripple, linkedin, indeed...) we put extra emphasis on narrowing down a more specific
        problem within the industry, being meaningful networking.
        </p>
        <br/>
        <h3> solution</h3>
        <p>
        after planning for (nearly) half a day, we were able to decide on the three main features of
        a web-application that would cover a wide range of uses.
        <ol>
        <li>a speed-dating esque, matching system for professionals </li>
        <li>interest & co-work specific group forums</li>
        <li>community-initiated projects for growing professionals</li>
        </ol>
        </p>
        

        </div>
        
        </>
    )
}

export default BrewCareer;