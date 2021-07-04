import React, { Component } from 'react';
import HeaderLayout from "../component/layout/headerlayout"
import FooterLayout from "../component/layout/footerlayout"
import CoursesSectionHeader from "../component/layout/coursessectionheader"
import CoursesBody from "../component/layout/coursesbody"

// styles
const pageStyles = {
    color: "#232129",
    padding: "1px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

class Courses extends Component {
    render() {
        return (
            <main style={pageStyles} >
                <HeaderLayout />
                <CoursesSectionHeader />
                <CoursesBody />

                <FooterLayout />
            </main>
        );
    }
}
export default Courses;
