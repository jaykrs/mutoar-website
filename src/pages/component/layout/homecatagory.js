import React from "react"
import catagoryImage1 from "../assets/images/category/1.jpg"
import catagoryImage2 from "../assets/images/category/2.jpg"
import catagoryImage3 from "../assets/images/category/3.jpg"
import catagoryImage4 from "../assets/images/category/4.jpg"
import catagoryImage5 from "../assets/images/category/5.jpg"
import catagoryImage6 from "../assets/images/category/6.jpg"
import catagoryImage7 from "../assets/images/category/7.jpg"
import catagoryImage8 from "../assets/images/category/8.jpg"
import catagoryImage9 from "../assets/images/category/9.jpg"
import catagoryImage10 from "../assets/images/category/10.jpg"

export default function HomeCatagory({ pagetitle,pagedescription,cart }) {
    return ( 
<section className="course-category">
        <div className="section-padding">
          <div className="container">
            <div className="top-content text-center">
              <h2 className="section-title">Best categories</h2>
              <p>Donec rutrum congue leo eget malesuada</p>
            </div>{/* /.top-content */}
            <div className="category-items">
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage1} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-layers" /><span className="item-title">Design</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage2} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-chemistry" /><span className="item-title">Development</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage3} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-puzzle" /><span className="item-title">IT &amp; Software</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage4} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-briefcase" /><span className="item-title">Business</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage5} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-handbag" /><span className="item-title">Marketing</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage6} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-layers" /><span className="item-title">Lifestyle</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage7} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-chemistry" /><span className="item-title">Photography</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage8} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-puzzle" /><span className="item-title">Music</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage9} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-briefcase" /><span className="item-title">Academics</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
              <div className="item radius text-center">
                <div className="item-thumb"><img className="radius" src={catagoryImage10} alt="Item Thumbnail" /></div>{/* /.item-thumb */}
                <div className="item-details">
                  <a href="#">
                    <div className="item-texts">
                      <i className="icon-handbag" /><span className="item-title">Language</span>
                    </div>{/* /.item-texts */}
                  </a>
                </div>{/* /.item-details */}
              </div>{/* /.item */}
            </div>{/* /.category-items */}
            <div className="btn-container text-center bm8">
              <a href="#" className="btn btn-lg section-btn">Browse all</a>
            </div>
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </section>

    )}