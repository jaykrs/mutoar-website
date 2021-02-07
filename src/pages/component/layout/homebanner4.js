import React from "react"
import bannerImage1 from "../assets/images/posts/1.jpg"
import bannerImage2 from "../assets/images/posts/2.jpg"
import bannerImage3 from "../assets/images/posts/3.jpg"

export default function HomeBanner4({ pagetitle,pagedescription,cart }) {
    return ( 
        <section className="recent-posts black-bg">
        <div className="section-padding">
          <div className="container">
            <div className="top-content">
              <div className="left-content float-left">
                <h2 className="section-title">Recent Blog Posts</h2>
                <p>Donec rutrum congue leo eget malesuada</p>
              </div>{/* /.left-content */}
              <div className="owl-controls float-right disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div>{/* /.owl-controls */}
            </div>{/* /.top-content */}
            <div id="post-slider" className="post-slider owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-2000px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '3600px'}}><div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage1} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">WordPress Theme Development Resources</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage2} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">ow To Create A Local Business Directory Site In WordPress</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage3} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">How To Tell If A Site Is WordPress Or Not</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage1} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">WordPress Theme Development Resources</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage2} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">ow To Create A Local Business Directory Site In WordPress</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item active" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage3} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">How To Tell If A Site Is WordPress Or Not</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item cloned active" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage1} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">WordPress Theme Development Resources</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item cloned active" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage2} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">ow To Create A Local Business Directory Site In WordPress</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div><div className="owl-item cloned" style={{width: '370px', marginRight: '30px'}}><div className="item">
                      <article className="post">
                        <div className="entry-thumbnail radius"><img src={bannerImage3} alt="Post Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content">
                          <h3 className="entry-title"><a href="single.html">How To Tell If A Site Is WordPress Or Not</a></h3>{/* /.entry-title */}
                          <div className="entry-meta">
                            <span className="author"><i className="icon-user" /> <a href="#">Anthony Doe</a></span>{/* /.author */}
                            <span className="time"><i className="icon-calendar" /> 26/05/2018</span>{/* /.time */}
                          </div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div></div></div></div><div className="owl-dots disabled"><button role="button" className="owl-dot active"><span /></button></div></div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </section>
    )}