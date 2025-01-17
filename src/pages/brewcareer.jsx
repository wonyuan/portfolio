import Return from '../components/return.jsx';

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
        <h3>overview</h3>
        <p><i>
            36 hours, 2 ux researchers, 2 product designers
        </i></p>
        <p>my roles for this project were <b>ui/ux designer, branding, prototyping and user testing.</b></p>
        <p>our team was awarded <b>2nd best overall.</b></p>
        
        <h3> problem </h3>
        <p style={{marginBottom:'35px'}}>
        submitted as a part of the uwaterloo's first designathon ctrl + y, the presented problem
        required us to find an empowering solution for job seekers and independent workers
        looking to find projects, networks, and ways to navigate the current job market.
        <br/>
        <br/>
        as a result of there being a diverse number of pre-existing solutions in the market, (ex.
        ripple, linkedin, indeed...) we put an extra emphasis on narrowing down a more specific
        problem within the industry, <b>being meaningful networking</b>.
        </p>
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
        <div class="proj-img-container">
          <img src="/brew2.png" alt="Project Image" class="proj-img"></img>
          <span class="hover-text">preliminary brainstorming and planning</span>
        </div>
        <br/>
        <p>utilizing user personas, we finally had a vision of the ui for our project, ensuring 
        accessibility as well as aesthetics. some of the key ideas we were able to piece out were:
        </p>
        <ul>
          <li>what are some blockers that prevent one from networking?</li>
          <li>what do you wish was more convenient in the job-hunt process?</li>
          <li>when have you been able to create a long-lasting connection?</li>
        </ul>
        <div class="proj-img-container">
          <img src="/brew3.png" alt="brew3 img" class="proj-img"></img>
          <span class="hover-text">sarah, a recently laid off <br/>professional looking for work</span>
        </div>
        <br/>
        <h3>user flow</h3>
        <div class="proj-img-container">
          <img src="/brew5.png" alt="brew3 img" class="proj-img"></img>
          <span class="hover-text">flow analysis of the initial prototype</span>
        </div>
        <h3>delivery</h3>
          <p>
          after demoing our final product to the judges, we were able to win 2nd place overall! being my first designathon, i got to really put my mind to the
          entire design process––from the initial ideation to the final prototyping, and all in 36 hours which was incredibly fun. 
          <br/>
          <br/>
          if i took anything from this event, it's that no design work is ever wasted. although the process was grueling,
          every iteration gave us a new idea and was a stepping stone to the final product. documentation is key!
          </p>
        </div>
        
        </>
    )
}

export default BrewCareer;