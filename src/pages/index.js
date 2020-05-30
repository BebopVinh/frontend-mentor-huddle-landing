import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"


import './index.sass'

const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" />

    <div class="header">
      <img class="logo" src="logo.svg" />
    </div>

    {/* <Img path={"../images/illustration-mockups.svg"} /> */}
    <div className="container">
      {/* Left Side */}
      <img className="illustration" src="illustration-mockups.svg" alt="mockup" />

      {/* Right Side */}
      <div className="description">
        <h2 className="headings">
          Build The Community Your Fans Will Love
      </h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
          Create connections with your users as you engage in genuine discussion.
      </p>
        <button className="main-button headings">Register</button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
