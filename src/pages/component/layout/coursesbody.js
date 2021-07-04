import React from "react"
import breadcrumb from "../assets/images/breadcrumb.jpg"
import popular1 from "../assets/images/popular/1.jpg"


export default function CoursesBody() {
    var courses = ['The Complete Digital Marketing Course - 12 Courses in 1', 'React 16 - The Complete Guide (incl. React Router 4 & Redux)', 'Become A Full Stack Web Developer - Beginner To Advanced', 'The Complete React Web Developer Course (with Redux)'];
    var courseList = courses.map(function (course) {
        return <div class="item">
            <div class="item-thumb"><img src={popular1} alt="Item Thumbnail" /></div>

            <div class="item-details">
                <h3 class="item-title"><a href="course-single-01.html">{course}</a></h3>

                <span class="instructor"><a href="#">Justin Marks</a></span>
                <div class="details-bottom">
                    <div class="course-price float-left"><span class="currency">$</span><span class="price">15.99</span></div>

                    <div class="rating float-right">
                        <span style={{ cursor: 'default' }}>
                            <div class="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}>
                                <div class="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }}></div>
                                <div class="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto' }}><span class="fas fa-star"></span></div>
                            </div>
                            <div class="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}>
                                <div class="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }}></div>
                                <div class="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0', right: '0', width: 'auto' }}><span class="fas fa-star"></span></div>
                            </div>
                            <div class="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}>
                                <div class="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }}></div>
                                <div class="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0', right: '0', width: 'auto' }}><span class="fas fa-star"></span></div>
                            </div>
                            <div class="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}>
                                <div class="rating-symbol-background far fa-star" style={{ visibility: 'hidden' }}></div>
                                <div class="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0', right: '0', width: 'auto' }}><span class="fas fa-star"></span></div>
                            </div>
                            <div class="rating-symbol" style={{ display: 'inline-block', position: 'relative' }}>
                                <div class="rating-symbol-background far fa-star" style={{ visibility: 'visible' }}></div>
                                <div class="rating-symbol-foreground" style={{ display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0', right: '0', width: '50%' }}><span class="fas fa-star"></span></div>
                            </div>
                        </span>
                        <input type="hidden" class="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5" /><span class="label label-default">4.5</span>
                    </div>
                </div>

            </div>

        </div>;
    })


    return (
        <section class="courses">
            <div class="section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="filters">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="selectric-wrapper selectric-filter-select"><div class="selectric-hide-select"><select class="filter-select" name="text" tabindex="-1">
                                            <option value="" selected="">All price</option>
                                            <option value="20">Under $20</option>
                                            <option value="40">Under $40</option>
                                            <option value="60">Under $60</option>
                                        </select></div><div class="selectric"><span class="label">All price</span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected">All price</li><li data-index="1" class="">Under $20</li><li data-index="2" class="">Under $40</li><li data-index="3" class="last">Under $60</li></ul></div></div><input class="selectric-input" tabindex="0" /></div>

                                        <div class="selectric-wrapper selectric-filter-select"><div class="selectric-hide-select"><select class="filter-select" name="text" tabindex="-1">
                                            <option value="" selected="">All type</option>
                                            <option value="online">Online</option>
                                            <option value="offline">Offline</option>
                                        </select></div><div class="selectric"><span class="label">All type</span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected">All type</li><li data-index="1" class="">Online</li><li data-index="2" class="last">Offline</li></ul></div></div><input class="selectric-input" tabindex="0" /></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <span class="float-left">Sort by:</span>

                                        <div class="selectric-wrapper selectric-filter-select"><div class="selectric-hide-select"><select class="filter-select" name="text" tabindex="-1">
                                            <option value="" selected="">Popularity</option>
                                            <option value="paid">Top paid</option>
                                            <option value="free">Top free</option>
                                        </select></div><div class="selectric"><span class="label">Popularity</span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected">Popularity</li><li data-index="1" class="">Top paid</li><li data-index="2" class="last">Top free</li></ul></div></div><input class="selectric-input" tabindex="0" /></div>

                                        <div class="layout-switcher">
                                            <span class="grid active"><i class="fa fa-th"></i></span>
                                            <span class="list"><i class="fa fa-list"></i></span>
                                        </div>
                                        <p>
                                            Showing 12 of 17
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="course-items">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        {courseList}
                                    </div>
                                </div>

                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <aside class="sidebar">
                                <div class="category-list">
                                    <ul>
                                        <li class="active"><a href="#">All Courses</a></li>
                                        <li><a href="#">IT &amp; Software</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Photography</a></li>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Arts &amp; Music</a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}