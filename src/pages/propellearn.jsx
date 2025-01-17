import Return from '../components/return.jsx';

function Propellearn(){
    return(
        <>
        <div>
        <Return/>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h3 style={{ marginBottom: '5px' }}> propellearn </h3>
        </div>
        <a href="https://embed.figma.com/proto/YkdfYe6Q97Eh8bn4ZjwFZ7/propellearn?node-id=11-57&scaling=scale-down-width&content-scaling=fixed&page-id=7%3A50&starting-point-node-id=11%3A57&embed-host=sharehttps://embed.figma.com/proto/YkdfYe6Q97Eh8bn4ZjwFZ7/propellearn?content-scaling=fixed&kind=proto&node-id=11-57&page-id=7%3A50&scaling=scale-down&starting-point-node-id=11%3A57&embed-host=share" className="proj-links" target="_blank" rel="noopener noreferrer">
          <div className="link-tag">
            <p className="link-tag-text"> → demo</p>
          </div>
        </a>
      </div>

        <div className='prototype-container' style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <iframe
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', maxWidth: '100%' }}
            width="100%"
            height="350"
            src="https://embed.figma.com/proto/YkdfYe6Q97Eh8bn4ZjwFZ7/propellearn?node-id=125-755&scaling=scale-down-width&content-scaling=fixed&page-id=7%3A50&starting-point-node-id=125%3A755&embed-host=share" allowfullscreen>        
          </iframe>
        </div>
        <h2>course evaluations: action plans</h2>
        <div className="thin-divider"></div>
        <h3>overview</h3>
        <p><i>
            visual design, user research, prototyping
        </i></p>
        <h3>tools</h3>
        <p><i>
            figma, 
        </i></p>
        <h3> problem </h3>
        <p style={{marginBottom:'35px'}}>
        course evaluations have been a main tool in the assessment and improve of education, 
        providing valuable insights into course design, teaching effectiveness, and student engagement.
        yet, current systems often leave professors overwhelmed by unstructured data, 
        open-ended comments, and lots and lots of jargon without providing clear guidance on how to act. 
        <br/>
        <br/>
        this makes it difficult to identify actionable steps for meaningful improvements. 
        students find that their feedback goes unnoticed, reducing their motivation to participate, 
        and the lack of streamlined, actionable feedback available prevents educators from efficiently 
        refining their courses to deliver better learning outcomes.
        </p>
        
        </div>
        
        </>
    )
}

export default Propellearn;