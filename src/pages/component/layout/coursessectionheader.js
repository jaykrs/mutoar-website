import React from "react"
import breadcrumb from "../assets/images/breadcrumb.jpg"
import popular7 from "../assets/images/popular/7.jpg"


export default function CoursesSectionHeader() {
    return (
        <section class="page-name background-bg" data-image-src={breadcrumb} >
            <div class="overlay">
                <div class="section-padding">
                    <div class="container">
                        <form action="#" class="course-search-form">
                            <input type="text" name="search" id="search" class="search" placeholder="Find a course or tutorial " />
                            <input type="submit" name="submit" id="search-submit" class="sreach-submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}