import React, { useState } from "react"
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/magnific-popup.css"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/responsive.css"
import "../assets/css/selectric.css"
import "../assets/css/simple-line-icons.css"
import "../assets/css/style.css"
import "../assets/css/timeTo.css"
import "../assets/css/woocommerce.css"
import headerlogo from "../assets/images/logop.png"
import itemimage1 from "../assets/images/shop/1.jpg"
import itemimage2 from "../assets/images/shop/2.jpg"
import courses from "../../courses/courses"
import { Link } from "gatsby"
export default function HeaderLayout({ pagetitle, pagedescription, cart }) {

  const [supportTelephone, setSupportTelephone] = useState(localStorage.getItem('supportTelephone'));
  const [supportEmail, setSupportEmail] = useState('');

  let courseurl = "/Courses";

  return (
    <div>
      <header className="masthead">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="top-contact">
                  <div className="trggericon"><i className="fas fa-at" /></div>
                  <div className="close"><i className="far fa-times-circle" /></div>
                  <div className="contacts">
                    <span><i className="fas fa-phone" /> <a href="tel:61383766284">{supportTelephone}</a></span>
                    <span><i className="fas fa-envelope" /> <a href="#">support@courseware.com</a></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="menu-search-form dropdown float-right">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Search</span> <i className="fas fa-search" />
                  </a>
                  <div className="dropdown-menu">
                    <form action="#" className="menu-search">
                      <input type="text" className="form-control" placeholder="Search ..." name="s" title="Search here" required />
                      <input type="submit" className="form-control" />
                    </form>
                  </div>
                </div>
                <div className="menu-cart dropdown float-right">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Cart <i className="fas fa-shopping-cart" />
                  </a>
                  <div className="dropdown-menu cart-menu">
                    <div className="widget_shopping_cart_content">
                      <div className="cart-top">
                        <div className="item media">
                          <button className="btn close-btn"><i className="icons icon-close" /></button>
                          <div className="item-thumbnail">
                            <img src={itemimage1} alt="Item Thimbnail" />
                          </div>{/* /.item-thumbnail */}
                          <div className="item-details media-body">
                            <div className="rating"><span style={{ cursor: 'default' }}><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'visible' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '50%' }}><span className="fas fa-star" /></div></div></span><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" defaultValue="4.5" data-fractions={5} /><span className="label label-default">4.5</span></div>{/* /.rating */}
                            <h4 className="item-title"><a href="#">Product Name Here</a></h4>{/* /.item-title */}
                            <div className="price">
                              <span className="current-price">$15.99</span>{/* /.current-price */}
                            </div>{/* /.price */}
                            <span className="item-count">3</span>
                          </div>{/* /.item-details */}
                        </div>{/* /.item */}
                        <div className="item media">
                          <button className="btn close-btn"><i className="icons icon-close" /></button>
                          <div className="item-thumbnail">
                            <img src={itemimage2} alt="Item Thimbnail" />
                          </div>{/* /.item-thumbnail */}
                          <div className="item-details media-body">
                            <div className="rating"><span style={{ cursor: 'default' }}><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span className="fas fa-star" /></div></div><div className="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}><div className="rating-symbol-background far fa-star" style={{ visibility: 'visible' }} /><div className="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '50%' }}><span className="fas fa-star" /></div></div></span><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" defaultValue="4.5" data-fractions={5} /><span className="label label-default">4.5</span></div>{/* /.rating */}
                            <h4 className="item-title"><a href="#">Product Name Here</a></h4>{/* /.item-title */}
                            <div className="price">
                              <span className="current-price">$15.99</span>{/* /.current-price */}
                            </div>{/* /.price */}
                            <span className="item-count">3</span>
                          </div>{/* /.item-details */}
                        </div>{/* /.item */}
                      </div>{/* /.cart-top */}
                      <div className="cart-middle">
                        <button className="btn float-left"><i className="ti-trash" /> Empty Cart</button>
                        <div className="price-total float-right">
                          <span>Sub total:</span>
                          <div className="price">
                            <span className="current-price">$1555.99</span>{/* /.current-price */}
                          </div>{/* /.price */}
                        </div>{/* /.price-total */}
                      </div>{/* /.cart-middle */}
                      <div className="cart-bottom">
                        <a href="cart.html" className="btn float-left"><i className="icons icon-basket-loaded" /> View Cart</a>
                        <a href="checkout.html" className="btn float-right">Checkout</a>
                      </div>{/* /.cart-bottom */}
                    </div>{/* /.widget_shopping_cart_content */}
                  </div>
                </div>
                <div className="user-area dropdown float-right">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    myCourseware
                  </a>
                  <div className="user-menu dropdown-menu">
                    <a className="nav-link" href="#"><i className="fa fa- user" />My Profile</a>
                    <a className="nav-link" href="#"><i className="fa fa- user" />Notifications <span className="count">13</span></a>
                    <a className="nav-link" href="#"><i className="fa fa -cog" />Settings</a>
                    <a className="nav-link" href="#"><i className="fa fa-power -off" />Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* /.header-top */}
        <div className="header-bottom">
          <div className="container">
            <nav className="navbar navbar-expand-md m-0">
              <Link className="navbar-brand" to="/"><img src={headerlogo} alt="Logo" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars" /></span>
              </button>
              <div className="collapse navbar-collapse" id="main-menu">
                <ul className="navbar-nav">
                  <li className="nav-item menu-item-has-children dropdown active">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/">Home</Link>
                      <a className="dropdown-item" href="index-02.html">Demo 02</a>
                      <a className="dropdown-item" href="index-03.html">Demo 03</a>
                      <a className="dropdown-item" href="index-04.html">Demo 04</a>
                    </div>
                  </li>
                  <li className="nav-item menu-item-has-children dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/courses/courses">All Courses</Link>
                      <a className="dropdown-item" href="course-single-01.html">Course single 01</a>
                      <a className="dropdown-item" href="course-single-02.html">Course single 02</a>
                    </div>
                  </li>
                  <li className="nav-item menu-item-has-children dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Instructors</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="instructors.html">All Instructors</a>
                      <a className="dropdown-item" href="instructor-single.html">Instructor Single</a>
                    </div>
                  </li>
                  <li className="nav-item menu-item-has-children dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="blog.html">Blog Posts</a>
                      <a className="dropdown-item" href="single.html">Blog single</a>
                    </div>
                  </li>
                  <li className="nav-item menu-item-has-children dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="404.html">404 Error</a>
                      <a className="dropdown-item" href="about.html">About</a>
                      <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                      <a className="dropdown-item" href="contact.html">Contact</a>
                      <a className="dropdown-item" href="events.html">Events</a>
                      <a className="dropdown-item" href="event-details.html">Event Details</a>
                      <a className="dropdown-item" href="faq.html">FAQ</a>
                      <a className="dropdown-item" href="portfolio.html">Portfolio</a>
                      <a className="dropdown-item" href="portfolio-single.html">Portfolio Single</a>
                      <a className="dropdown-item" href="login.html">Login</a>
                      <a className="dropdown-item" href="register.html">Register</a>
                      <a className="dropdown-item" href="shop.html">Shop</a>
                      <a className="dropdown-item" href="shop-single.html">Shop Single</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>{/* /.container */}
        </div>{/* /.header-bottom */}
      </header>
    </div>
  )
}