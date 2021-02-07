import React from "react"
import footerlogo from "../assets/images/logoh.png"
import f1 from "../assets/images/footer/1.jpg"
import f2 from "../assets/images/footer/2.jpg"
import f3 from "../assets/images/footer/3.jpg"

export default function FooterLayout({ pagetitle,pagedescription,cart }) {
    return (
        <footer className="site-footer">
        <div className="footer-top light-black">
          <div className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about_us">
                    {/*  <h4>Courseware</h4> */} 
                    <img className="footer-logo" src={footerlogo} alt="Site Logo" />
                    <div className="widget-details">
                      <p>
                        We are a team of different geeks that believe in producing top-quality courses and category based on best videos. 
                      </p>
                      <ul>
                        <li> <i className="fa fa-phone-square" /> 088 12345 67890</li>
                        <li> <i className="fa fa-envelope-square" /> <a href="#"> info@courseware.com</a></li>
                      </ul>
                      <div className="widget-social text-center">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-google-plus-square" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                      </div>{/* /.widget-social */}
                    </div>{/* /.widget-details */}
                  </div>{/* /.widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4>Quick Links</h4>
                    <div className="widget-details">
                      <ul className="menu">
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Courses</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Events</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> About Us</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Gallery</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Become a Teacher</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Contact</a></li>
                      </ul>
                    </div>{/* /.widget-details */}
                  </div>{/* /.widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget_recnt_news">
                    <h4>News</h4>
                    <div className="widget-details">
                      <article className="post type-post media">
                        <div className="entry-thumbnail float-left"><img src={f1} alt="Entry Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content media-body">
                          <h3 className="entry-title"><a href="#">Guide to WordPress Custom Post Type</a></h3>{/* /.entry-thumbnail */}
                          <div className="entry-meta"><span><i className="icon-bubble" /> 23 Comments</span></div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                      <article className="post type-post media">
                        <div className="entry-thumbnail float-left"><img src={f2} alt="Entry Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content media-body">
                          <h3 className="entry-title"><a href="#">SEO friendly WordPress and Squarespace</a></h3>{/* /.entry-thumbnail */}
                          <div className="entry-meta"><span><i className="icon-bubble" /> 23 Comments</span></div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                      <article className="post type-post media">
                        <div className="entry-thumbnail float-left"><img src={f3} alt="Entry Thumbnail" /></div>{/* /.entry-thumbnail */}
                        <div className="entry-content media-body">
                          <h3 className="entry-title"><a href="#">David Braun: Chief Monster of Web Design</a></h3>{/* /.entry-thumbnail */}
                          <div className="entry-meta"><span><i className="icon-bubble" /> 23 Comments</span></div>{/* /.entry-meta */}
                        </div>{/* /.entry-content */}
                      </article>{/* /.post */}
                    </div>{/* /.widget-details */}
                  </div>{/* /.widget */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="widget widget_nav_menu">
                    <h4>Support</h4>
                    <div className="widget-details">
                      <ul className="menu">
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> FAQ</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Documentation</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Forums</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Career</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Community</a></li>
                        <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right" /> Management</a></li>
                      </ul>
                    </div>{/* /.widget-details */}
                  </div>{/* /.widget */}
                </div>
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.section-padding */}
        </div>{/* /.footer-top */}
        <div className="footer-bottom black-bg">
          <div className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="copy-right float-left">
                    <span> Copyright © 2018 <a href="https://demos.jeweltheme.com/courseware" target="_blank" rel="nofollow">Courseware</a>, All rights reservs</span>
                  </div>{/* /.copy-right */}
                </div>
                <div className="col-md-4">
                  <ul className="menu float-right">
                    <li className="menu-item"><a href="#"> Privacy</a></li>
                    <li className="menu-item"><a href="#"> Terms</a></li>
                    <li className="menu-item"><a href="#"> Sitemap</a></li>
                  </ul>
                </div>
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.section-padding */}
        </div>{/* /.footer-bottom */}
      </footer>
        )
    }