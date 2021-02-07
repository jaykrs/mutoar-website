import React from "react"
import avatar5 from "../assets/images/avatar/5.png"
import avatar6 from "../assets/images/avatar/6.png"
import avatar7 from "../assets/images/avatar/7.png"

export default function HomeTestimonial({ pagetitle,pagedescription,cart }) {
    return ( 
        <section className="testimonial text-center">
        <div className="section-padding">
          <div className="container">
            <div id="testimonial-slider" className="testimonial-slider carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#testimonial-slider" data-slide-to={0} className />
                <li data-target="#testimonial-slider" data-slide-to={1} className="active" />
                <li data-target="#testimonial-slider" data-slide-to={2} className />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="media">
                    <img className="rounded-circle mr-3" src={avatar5} alt="Avatar Image" />
                    <div className="media-body">
                      <h4 className="name"><a href="#">Julia Warren</a></h4>
                      <span className="designation">Student</span>
                    </div>
                  </div>{/* /.top-content */}
                  <div className="bottom-content">
                    <span className="title">Awesome Learning Site</span>
                    <p>
                      The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                    </p>
                  </div>{/* /.bottom-content */}
                </div>
                <div className="carousel-item active">
                  <div className="media">
                    <img className="rounded-circle mr-3" src={avatar6} alt="Avatar Image" />
                    <div className="media-body">
                      <h4 className="name"><a href="#">Arthur Watson</a></h4>
                      <span className="designation">Photographer</span>
                    </div>
                  </div>{/* /.top-content */}
                  <div className="bottom-content">
                    <span className="title">Awesome Learning Site</span>
                    <p>
                      What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                    </p>
                  </div>{/* /.bottom-content */}
                </div>
                <div className="carousel-item">
                  <div className="media">
                    <img className="rounded-circle mr-3" src={avatar7} alt="Avatar Image" />
                    <div className="media-body">
                      <h4 className="name"><a href="#">Janet Alvarado</a></h4>
                      <span className="designation">Student</span>
                    </div>
                  </div>{/* /.top-content */}
                  <div className="bottom-content">
                    <span className="title">Awesome Learning Site</span>
                    <p>
                      A collection of textile samples lay spread out on the table. Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. 
                    </p>
                  </div>{/* /.bottom-content */}
                </div>
              </div>
              <a className="carousel-control-prev" href="#testimonial-slider" role="button" data-slide="prev"> 
                <i className="icons icon-arrow-left" />
              </a>
              <a className="carousel-control-next" href="#testimonial-slider" role="button" data-slide="next">
                <i className="icons icon-arrow-right" />
              </a>
            </div>
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </section>
        )}