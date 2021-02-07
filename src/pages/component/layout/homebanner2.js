import React from "react"
import bannerImage2 from "../assets/images/bg1.jpg"

export default function HomeBanner2({ pagetitle,pagedescription,cart }) {
    return ( 
        <section className="promotion background-bg text-center" data-image-src={bannerImage2} style={{backgroundImage: 'url("../assets/images/bg1.jpg")'}}>
        <div className="overlay">
          <div className="section-padding">
            <div className="container">
              <h2 className="title">Tons of Courses just <span>$10</span></h2>
              <h3 className="sub-title">Teacher Appreciation Month</h3>
              <div id="countdown" className="timeTo timeTo-white" style={{fontFamily: 'Verdana, sans-serif', fontSize: '40px'}}><figure style={{maxWidth: '79px'}}><div className="first" style={{width: '38px', height: '43px'}}><ul style={{left: '4px', top: '-43px'}}><li>0</li><li>0</li></ul></div><div style={{width: '38px', height: '43px'}}><ul style={{left: '4px', top: '-43px'}}><li>0</li><li>0</li></ul></div><figcaption style={{fontSize: '15px'}}>hours</figcaption></figure><span>:</span><figure style={{maxWidth: '79px'}}><div className="first" style={{width: '38px', height: '43px'}}><ul style={{left: '4px', top: '-43px'}}><li>0</li><li>0</li></ul></div><div style={{width: '38px', height: '43px'}}><ul style={{left: '4px', top: '-43px'}}><li>0</li><li>0</li></ul></div><figcaption style={{fontSize: '15px'}}>minutes</figcaption></figure><span>:</span><figure style={{maxWidth: '79px'}}><div className="first" style={{width: '38px', height: '43px'}}><ul style={{left: '4px', top: '-43px'}}><li>0</li><li>0</li></ul></div><div style={{width: '38px', height: '43px'}}><ul style={{left: '4px', top: '-43px'}}><li>0</li><li>0</li></ul></div><figcaption style={{fontSize: '15px'}}>seconds</figcaption></figure></div>
              <form action="#" className="enrole-form">
                <input type="text" name="name" className="form-control" placeholder="Name*" required />
                <input type="email" name="email" className="form-control" placeholder="Email*" required />
                <input type="submit" name="submit" id="enrole-submit" className="form-control" defaultValue="Get Started Now" />
              </form>{/* /.enrole-form */}
            </div>{/* /.container */}
          </div>{/* /.section-padding */}
        </div>{/* /.overlay */}
      </section>
    )}