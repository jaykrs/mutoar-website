import React from "react"
import avatar5 from "../assets/images/avatar/5.png"
import avatar6 from "../assets/images/avatar/6.png"
import avatar7 from "../assets/images/avatar/7.png"

export default function HomeSubscribe({ pagetitle,pagedescription,cart }) {
    return ( 
<section className="subscribe text-center gray-bg">
        <div className="section-padding">
          <div className="container">
            <h4 className="title">Subscribe Weekly Newsletter</h4>
            <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1971 bm8 " method="post" data-id={1971} data-name="Mail Form">
              <input className="subscribe-email" type="email" id="subscribe-email" name="EMAIL" placeholder="Enter Email Address Here" required />
              <input className="subscribe-submit" type="submit" id="subscribe-submit" name="submit" defaultValue="Subscribe now" />
            </form>
          </div>{/* /.container */}
        </div>{/* /.section-padding */}
      </section>
    )}