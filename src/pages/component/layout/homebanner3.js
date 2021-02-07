import React from "react"
import bannerImage3 from "../assets/images/bg2.jpg"

export default function HomeBanner3({ pagetitle,pagedescription,cart }) {
    return ( 
      <section className="facts background-bg" data-image-src={bannerImage3} style={{backgroundImage: 'url("assets/images/bg2.jpg")'}}>
      <div className="overlay">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="item media">
                  <div className="item-icon mr-3"><i className="icons icon-book-open" /></div>{/* /.item-icon */}
                  <div className="item-details">
                    <span className="count">765</span>{/* /.count */}
                    <h3 className="item-title">Courses Published</h3>{/* /.item-title */}
                  </div>{/* /.item-details */}
                </div>{/* /.item */}
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item media">
                  <div className="item-icon mr-3"><i className="icons icon-eyeglass" /></div>{/* /.item-icon */}
                  <div className="item-details">
                    <span className="count">249</span>{/* /.count */}
                    <h3 className="item-title">Expert Instructors</h3>{/* /.item-title */}
                  </div>{/* /.item-details */}
                </div>{/* /.item */}
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item media">
                  <div className="item-icon mr-3"><i className="icons icon-people" /></div>{/* /.item-icon */}
                  <div className="item-details">
                    <span className="count">8348</span>{/* /.count */}
                    <h3 className="item-title">Happy Learners</h3>{/* /.item-title */}
                  </div>{/* /.item-details */}
                </div>{/* /.item */}
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item media">
                  <div className="item-icon mr-3"><i className="icons icon-trophy" /></div>{/* /.item-icon */}
                  <div className="item-details">
                    <span className="count">99</span>{/* /.count */}
                    <h3 className="item-title">Awards Achieved</h3>{/* /.item-title */}
                  </div>{/* /.item-details */}
                </div>{/* /.item */}
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </div>{/* /.overlay */}
    </section>
    )}