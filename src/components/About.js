import React, { Component } from 'react'

export class About extends Component {
  

  render() {
    return (
      <div>
        <section className="bg-light text-center py-5"> 
          <div className="container"> 
            <h1 className="display-4">About Us</h1> 
            <p className="lead">We are passionate about delivering quality solutions to our clients worldwide.</p> 
            </div> </section> 
            <section className="py-5"> 
              <div className="container"> 
                <div className="row align-items-center"> 
                <div className="col-md-6 mb-4 mb-md-0"> 
                  <img src="/BackgroundLogo.png" className="img-fluid rounded shadow" alt="About Us"/> 
                  </div>
                   <div className="col-md-6"> 
                    <h2>Who We Are</h2> 
                    <p> MyCompany is a team of dedicated professionals committed to innovation and excellence. Since our founding, we’ve helped businesses grow by providing cutting-edge technology and personalized support. </p> 
                    <p> Our mission is to empower organizations with tools that make a difference, while maintaining integrity, transparency, and customer satisfaction. </p> 
                    </div> 
                    </div>
                     </div> 
                     </section> 
                     <section className="bg-light py-5"> 
                      <div className="container text-center"> 
                        <h2 className="mb-4">Meet Our Team</h2> 
                        <div className="row"> <div className="col-md-4"> 
                          <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Team Member"/> <
                            h5>Jane Doe</h5>
                             <p className="text-muted">CEO & Founder</p> 
                             </div> 
                             <div className="col-md-4"> 
                              <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Team Member"/> 
                              <h5>John Smith</h5>
                               <p className="text-muted">Lead Developer</p> 
                               </div> <div className="col-md-4"> 
                                <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Team Member"/> 
                                <h5>Emily Johnson</h5> 
                                <p className="text-muted">Project Manager</p> 
                                </div> 
                                </div> 
                                </div> 
                                </section>
      </div>
    )
  }
}

export default About
