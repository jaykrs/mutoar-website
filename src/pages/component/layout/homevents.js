import React from "react"
import eventsImage from "../assets/images/event/1.jpg"

export default function HomeEvents({ pagetitle,pagedescription,cart }) {
    return ( 
        <section className="events">
        <div className="section-padding">
          <div className="container">
            <div className="top-content">
              <div className="left-content float-left">
                <h2 className="section-title">Events</h2>
                <p>Donec rutrum congue leo eget malesuada</p>
              </div>{/* /.left-content */}
              <div className="right-content float-right"><a href="#" className="btn">View all</a></div>{/* /.right-content */}
            </div>{/* /.top-content */}
            <div className="row">
              <div className="col-md-6">
                <div className="event media">
                  <div className="event-time">
                    <time dateTime="2017-07-28"><span className="date">28</span> July</time>
                  </div>
                  <div className="event-details media-body">
                    <div className="event-thumb radius"><img src={eventsImage} alt="Event Thumbnail" /></div>{/* /.enent-thumb */}
                    <h2 className="event-title"><a href="event-details.html">Expand Your Programming Knowledge</a></h2>{/* /.event-title */}
                    <div className="event-meta">
                      <span className="time"><i className="icon-clock" /> 4am - 8pm</span>{/* /.time */}
                      <span className="place"><i className="icon-location-pin" /> New York, USA</span>{/* /.place */}
                    </div>{/* /.event-meta */}
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
                    </p>
                  </div>{/* /.event-details */}
                </div>{/* /.event */}
              </div>
              <div className="col-md-6">
                <div className="event media">
                  <div className="event-time">
                    <time dateTime="2017-07-28"><span className="date">28</span> July</time>
                  </div>
                  <div className="event-details media-body">
                    <div className="event-thumb radius"><img src={eventsImage} alt="Event Thumbnail" /></div>{/* /.enent-thumb */}
                    <h2 className="event-title"><a href="event-details.html">Land an Exciting New Tech Job</a></h2>{/* /.event-title */}
                    <div className="event-meta">
                      <span className="time"><i className="icon-clock" /> 4am - 8pm</span>{/* /.time */}
                      <span className="place"><i className="icon-location-pin" /> New York, USA</span>{/* /.place */}
                    </div>{/* /.event-meta */}
                    <p>
                      He lay on his armour back and lifted his head a little that he could see his brown belly, slightly domed and divided by into sections. 
                    </p>
                  </div>{/* /.event-details */}
                </div>{/* /.event */}
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </section>
    )}