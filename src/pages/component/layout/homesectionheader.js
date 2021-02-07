import React from "react"
import avatar1 from "../assets/images/avatar/1.png"
import popular7 from "../assets/images/popular/7.jpg"


export default function HomeSectionHeader({ pagetitle,pagedescription,cart }) {
    return (
        <section className="popular-courses">
        <div className="section-padding">
          <div className="container">
            <div className="top-content">
              <div className="left-content float-left">
                <h2 className="section-title">Popular courses</h2>
                <p>{pagetitle}</p>
              </div>{/* /.left-content */}
              <div className="owl-controls float-right"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div>{/* /.owl-controls */}
            </div>{/* /.top-content */}
            <div className="course-items with-slider">
              <div id="course-slider" className="course-slider owl-carousel owl-loaded owl-drag">
              
                <div className="owl-stage-outer">
               
                  <div className="owl-stage" style={{}}>
                    <div className="owl-item" style={{width: '270px', marginRight: '10px'}}>
                      <div className="item">
                        <div className="item-thumb">
                          <img src={popular7} alt="Item Thumbnail" />
                          <div className="avatar"><img className="rounded-circle" src={avatar1} alt="Avatar Image" /></div>{/* /.avatar */}
                        </div>{/* /.item-thumb */}
                        <div className="item-details">
                          <h3 className="item-title"><a href="course-single-01.html">Complete JavaScript
                              Course 2018: Build Real Projects!</a></h3>{/* /.item-title */}
                          <span className="instructor"><a href="#">Justin Marks</a></span>
                          {/* /.instructor */}
                          <div className="details-bottom">
                            <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>{/* /.course-price */}
                            <div className="rating float-right">
                              <span style={{cursor: 'default'}}>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                              </span><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions={2} /><span className="label label-default"> </span>
                            </div>{/* /.rating */}
                          </div>{/* /.details-bottom */}
                          <div className="item-meta">
                            <span><i className="icons icon-people" /> 129</span>
                            <span><i className="icons icon-clock" /> 22Hrs</span>
                            <span><i className="icons icon-bubble" /> 51</span>
                          </div>{/* /.item-meta */}
                        </div>{/* /.item-details */}
                      </div>
                    </div>
                    <div className="owl-item" style={{width: '270px', marginRight: '10px'}}>
                      <div className="item">
                        <div className="item-thumb">
                          <img src={popular7} alt="Item Thumbnail" />
                          <div className="avatar"><img className="rounded-circle" src={avatar1} alt="Avatar Image" /></div>{/* /.avatar */}
                        </div>{/* /.item-thumb */}
                        <div className="item-details">
                          <h3 className="item-title"><a href="course-single-01.html">Python Bootcamp: Go from
                              zero to hero in Python</a></h3>{/* /.item-title */}
                          <span className="instructor"><a href="#">Justin Marks</a></span>
                          {/* /.instructor */}
                          <div className="details-bottom">
                            <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>{/* /.course-price */}
                            <div className="rating float-right">
                              <span style={{cursor: 'default'}}>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                              </span><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions={2} /><span className="label label-default"> </span>
                            </div>{/* /.rating */}
                          </div>{/* /.details-bottom */}
                          <div className="item-meta">
                            <span><i className="icons icon-people" /> 129</span>
                            <span><i className="icons icon-clock" /> 22Hrs</span>
                            <span><i className="icons icon-bubble" /> 51</span>
                          </div>{/* /.item-meta */}
                        </div>{/* /.item-details */}
                      </div>
                    </div>
                    <div className="owl-item" style={{width: '270px', marginRight: '10px'}}>
                      <div className="item">
                        <div className="item-thumb">
                          <img src={popular7} alt="Item Thumbnail" />
                          <div className="avatar"><img className="rounded-circle" src={avatar1} alt="Avatar Image" /></div>{/* /.avatar */}
                        </div>{/* /.item-thumb */}
                        <div className="item-details">
                          <h3 className="item-title"><a href="course-single-01.html">The Complete Web
                              Developer Bootcamp</a></h3>{/* /.item-title */}
                          <span className="instructor"><a href="#">Justin Marks</a></span>
                          {/* /.instructor */}
                          <div className="details-bottom">
                            <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>{/* /.course-price */}
                            <div className="rating float-right">
                              <span style={{cursor: 'default'}}>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                              </span><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions={2} /><span className="label label-default"> </span>
                            </div>{/* /.rating */}
                          </div>{/* /.details-bottom */}
                          <div className="item-meta">
                            <span><i className="icons icon-people" /> 129</span>
                            <span><i className="icons icon-clock" /> 22Hrs</span>
                            <span><i className="icons icon-bubble" /> 51</span>
                          </div>{/* /.item-meta */}
                        </div>{/* /.item-details */}
                      </div>
                    </div>
                    <div className="owl-item" style={{width: '270px', marginRight: '10px'}}>
                      <div className="item">
                        <div className="item-thumb">
                          <img src={popular7} alt="Item Thumbnail" />
                          <div className="avatar"><img className="rounded-circle" src={avatar1} alt="Avatar Image" /></div>{/* /.avatar */}
                        </div>{/* /.item-thumb */}
                        <div className="item-details">
                          <h3 className="item-title"><a href="course-single-01.html">Complete Web Developer in
                              2018: Zero to Mastery</a></h3>{/* /.item-title */}
                          <span className="instructor"><a href="#">Justin Marks</a></span>
                          {/* /.instructor */}
                          <div className="details-bottom">
                            <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>{/* /.course-price */}
                            <div className="rating float-right">
                              <span style={{cursor: 'default'}}>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                                <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                  <div className="rating-symbol-background far fa-star" />
                                  <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}>
                                    <span />
                                  </div>
                                </div>
                              </span><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions={2} /><span className="label label-default"> </span>
                            </div>{/* /.rating */}
                          </div>{/* /.details-bottom */}
                          <div className="item-meta">
                            <span><i className="icons icon-people" /> 129</span>
                            <span><i className="icons icon-clock" /> 22Hrs</span>
                            <span><i className="icons icon-bubble" /> 51</span>
                          </div>{/* /.item-meta */}
                        </div>{/* /.item-details */}
                      </div>
                    </div>
                   
                   
                    
                    
                   
                   
                    
                  </div>
                </div>
                <div className="owl-dots"><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button></div>
              </div>{/* /.course-slider */}
            </div>{/* /.course-items */}
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </section>
        )}