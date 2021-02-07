import React from "react"
import bannerImage from "../assets/images/banner/1.jpg"

export default function HomeBanner({ pagetitle,pagedescription,cart }) {
    return (
<section className="banner-section banner-01 background-bg" data-image-src={bannerImage} style={{backgroundImage: "url("+{bannerImage}+")"}}>
        <div className="overlay">
          <div className="section-padding">
            <div className="container">
              <div className="banner-texts text-center">
                <h6 className="sub-title mb-2">Take the World’s Best Courses</h6>
                <h2 className="banner-title mb-5">Learn With Us</h2>
                <a href="#" className="btn btn-lg mt-2 banner-btn">Get started</a>
              </div>{/* /.banner-texts */}
            </div>{/* /.container */}
          </div>{/* /.section-padding */}
        </div>{/* /.overlay */}
      </section>
    )}