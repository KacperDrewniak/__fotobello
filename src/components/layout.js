import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/global.scss"
import NavbarComponent from "./navbar";
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from "./foot";
const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return <ParallaxProvider>
        <NavbarComponent/>
        {children}
        <Footer/>
    </ParallaxProvider>

}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
