import React from "react"
import { Link } from "gatsby"
import "./navbar.css"
import menuIcon from "./menu.svg"

class Navbar extends React.Component {
  state = {
    menuOpen: false,
  }

  menuClick = e => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
    e.target.classList.toggle("menu-open")
  }
  render() {
    return (
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">MillionGrad</Link>
          </div>
          <div className="nav-items">
            <Link to="/">Home</Link>
            <a href={process.env.GATSBY_AUTHOR_WEBSITE} target="_blank">
              My Website
            </a>
            <a href={process.env.GATSBY_GITHUB_URL} target="_blank">
              GitHub
            </a>
            <a href="https://twitter.com/RileyB_96" target="_blank">
              Twitter
            </a>
          </div>
          <div className="mobile-menu">
            <img
              src={menuIcon}
              alt=""
              onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
            />
            <div
              className="mobile-nav-items"
              style={{ display: this.state.menuOpen ? null : "none" }}
            >
              <span
                id="exit"
                onClick={() => this.setState({ menuOpen: false })}
              >
                &times;
              </span>
              <a href={process.env.GATSBY_AUTHOR_WEBSITE} target="_blank">
                My Website
              </a>
              <a href={process.env.GATSBY_GITHUB_URL} target="_blank">
                GitHub
              </a>
              <a href="https://twitter.com/RileyB_96" target="_blank">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
