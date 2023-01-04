import {Component} from 'react'
import {Link} from 'react-router-dom'

import {IoCloseCircleOutline} from 'react-icons/io5'
import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  closeWindow = () => {
    this.setState({
      isToggleActive: false,
    })
  }

  showDropDownMenu = () => (
    <>
      <ul className="navBar">
        <div className="nav-list-container">
          <Link to="/" className="link">
            <li className="item">Home</li>
          </Link>

          <Link to="/vaccination" className="link">
            <li className="item">Vaccination</li>
          </Link>

          <Link to="/about" className="link">
            <li className="item">About</li>
          </Link>
        </div>

        <li className="item">
          <button
            type="button"
            onClick={this.closeWindow}
            className="close-button"
          >
            <IoCloseCircleOutline />
          </button>
        </li>
      </ul>
    </>
  )

  render() {
    const {isToggleActive} = this.state
    return (
      <>
        <div className="header-container">
          <Link to="/" className="link">
            <h1 className="logo">
              COVID19<span className="india">INDIA </span>
            </h1>
          </Link>
          <ul className="navBar">
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>
            <Link to="/vaccination" className="link">
              <li className="item">Vaccination</li>
            </Link>

            <Link to="/about" className="link">
              <li className="item">About</li>
            </Link>
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-header-container">
            <Link to="/" className="link">
              <h1 className="logo">
                COVID19<span className="india">INDIA </span>
              </h1>
            </Link>
            <button
              type="button"
              className="toggle-button"
              onClick={this.whenToggleButtonClick}
            >
              <img
                src="https://res.cloudinary.com/dafhhfgcj/image/upload/v1663045639/Project/add-to-queue_1_ncwlo0.png"
                alt="menu"
              />
            </button>
          </div>

          <div className="menu">
            {isToggleActive ? this.showDropDownMenu() : ''}
          </div>
        </div>
      </>
    )
  }
}

export default Header
