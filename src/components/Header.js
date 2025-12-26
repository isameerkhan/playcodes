import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export class Header extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired
  }
  

  //if soemone not given the titles in <Header> tag then this default tile will take
  static defaultProps ={
    title :"playCodes"
  }



state = {
DarkModeStyle: { color: "black"},
flagMessaged : "false",
themecolor : "light"
}

darkModeEnabled = () => {
   if (this.state.flagMessaged === "false") 
    { 
      const userConfirmed = window.confirm("Are you sure you want to enable dark mode?"); 
      if (userConfirmed) { this.setState({ flagMessaged: "true" }); this.setState({ themecolor: "dark" }); this.setState({ DarkModeStyle: { color: "white"} });}
       else { this.setState({ flagMessaged: "false" }); this.setState({ themecolor: "light" }); this.setState({ DarkModeStyle: { color: "black"} });}
    } else{
      const userConfirmed = window.confirm("Are you sure you want to disabled dark mode?"); 
      if (userConfirmed) { this.setState({ flagMessaged: "false" }); this.setState({ themecolor: "light" });this.setState({ DarkModeStyle: { color: "black"} });}
       else { this.setState({ flagMessaged: "true" }); this.setState({ themecolor: "dark" }); this.setState({ DarkModeStyle: { color: "white"} });}
    }
  };

  render() {
    
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={this.state.themecolor}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{this.props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
         <li className="nav-item d-flex align-items-center"> 
          <div className="form-check form-switch mb-0"> 
            <input className="form-check-input" type="checkbox" role="switch" onClick={this.darkModeEnabled} id="switchCheckDefault"/> 
            <label className="form-check-label" htmlFor="switchCheckDefault" style={this.state.DarkModeStyle}>Dark Mode</label> 
            </div> 
            </li>



        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
  }
}

export default Header
