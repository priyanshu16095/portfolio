import React from 'react'

function WhatIKnow() {
  return (
    <div className='whatiknow'>
        <div className="whatiknowBody">
            <div className="whatiknowContainer container flex-v">
                <p className="title">What I know</p>
                <div className="cards flex">
                    <div className="card">
                      <p className="md-font">Front-End</p>
                      <div className="cardlabels flex">
                      <div className="whatiknowlabel">HTML</div>
                      <div className="whatiknowlabel">CSS</div>
                      <div className="whatiknowlabel">Tailwind</div>
                      <div className="whatiknowlabel">Javascript</div>
                      <div className="whatiknowlabel">React Js</div>
                      </div>
                    </div> 
                    <div className="card">
                      <p className="md-font">Backend</p>
                      <div className="cardlabels flex">
                      <div className="whatiknowlabel">Java</div>
                      <div className="whatiknowlabel">Spring Boot</div>
                      </div>
                    </div> 
                    <div className="card">
                      <p className="md-font">Backend</p>
                      <div className="cardlabels flex">
                      <div className="whatiknowlabel">MySQL</div>
                      </div>
                    </div>  
                    <div className="card">
                      <p className="md-font">Devops</p>
                      <div className="cardlabels flex">
                      <div className="whatiknowlabel">Git</div>
                      <div className="whatiknowlabel">Docker</div>
                      <div className="whatiknowlabel">Kubernetes</div>
                      </div>
                    </div>  
                    <div className="card">
                      <p className="md-font">Learing...</p>
                      <div className="cardlabels flex">
                      <div className="whatiknowlabel">Jenkins</div>
                      <div className="whatiknowlabel">Ansible</div>
                      <div className="whatiknowlabel">Redis</div>
                      <div className="whatiknowlabel">Typescript</div>
                      </div>
                    </div>  
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WhatIKnow
