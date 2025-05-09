import React from 'react'
import profile from "../assets/img/-sample-profile.jpg"

const HeroSection = () => {
  return (
    <div>
      
      <div id="home" className="container"> 
        <div className="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center g-5 py- text-center"> 
            <div className="col-10 col-sm-8 col-lg-6">
                 <img src={profile} className="border-outline rounded-circle d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="500" loading="lazy"/> 
            </div> 
            <div className="col-lg-6 text-center"> 
               <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1> 
               <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> 
               <div className="d-grid gap-2 d-md-flex justify-content-center">
                <button type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2">Primary</button> 
                
                </div> 
            </div> 
        </div> 
      </div>
    </div>
  )
}

export default HeroSection
