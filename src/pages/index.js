import React, { Fragment, useState, Component } from 'react';
import HeaderLayout from "../pages/component/layout/headerlayout"
import FooterLayout from "../pages/component/layout/footerlayout"
import HomeBanner from "../pages/component/layout/homebanner"
import HomeBanner2 from "../pages/component/layout/homebanner2"
import HomeSectionHeader from "../pages/component/layout/homesectionheader"
import HomeCatagory from "../pages/component/layout/homecatagory"
import HomeBanner3 from "../pages/component/layout/homebanner3"
import HomeEvents from "../pages/component/layout/homevents"
import HomeBanner4 from "../pages/component/layout/homebanner4"
import HomeTestimonial from "../pages/component/layout/hometestimonial"
import HomeSubscribe from "../pages/component/layout/homesubscribe"
// styles
const pageStyles = {
  color: "#232129",
  padding: "1px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}
// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#000000",
  },
]

// markup
class IndexPage extends Component {

  componentDidMount() {
    localStorage.setItem('supportTelephone', '61383766284');
    localStorage.setItem('supportEmail', 'support@mutoar.com');
  };




  render() {
    return (
      <main style={pageStyles} >
        <HeaderLayout />
        <HomeBanner />
        <HomeSectionHeader />
        <HomeBanner2 />
        <HomeCatagory />
        <HomeBanner3 />
        <HomeEvents />
        <HomeBanner4 />
        <HomeTestimonial />
        <HomeSubscribe />

        <FooterLayout />
      </main>
    );
  }
}
export default IndexPage;
