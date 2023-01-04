import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class About extends Component {
  state = {apiStatus: apiStatusConstants.initial, faqDetails: {}, factsData: {}}

  componentDidMount() {
    this.getFaqDetails()
  }

  getFaqDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(apiUrl)

    if (response.ok) {
      const faqData = await response.json()
      const faqs = faqData.faq
      const factoid = faqData.factoids
      this.setState({faqDetails: faqs})
      this.setState({factsData: factoid})
      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getCurrentDate = (separator = '-') => {
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()

    return `${date}${separator}${
      month < 10 ? `0${month + 1}` : `${month}`
    }${separator}${year}`
  }

  renderSuccessView = () => {
    const {faqDetails, factsData} = this.state
    return (
      <>
        <div className="about-faqs-container">
          <h1 className="about-heading">About</h1>
          <p className="last-updated-text">
            Last updated on {this.getCurrentDate()}
          </p>
          <p className="vaccination-details">
            Latest News on omicron Virus Variant
          </p>
          <p className="omicron-content">
            On 26 November 2021, WHO designated the variant B.1.1.529 a variant
            of concern, named Omicron, on the advice of WHO’s Technical Advisory
            Group on Virus Evolution (TAG-VE). This decision was based on the
            evidence presented to the TAG-VE that Omicron has several mutations
            that may have an impact on how it behaves, for example, on how
            easily it spreads or the severity of illness it causes. Here is a
            summary of what is currently known.
          </p>
          <p className="vaccination-details">
            COVID-19 Vaccines be ready for distribution
          </p>
          <ul className="faqs-unordered-list">
            {faqDetails.map(each => (
              <li key={each.question} className="faq-list-item">
                <p className="faq-question">{each.question}</p>
                <p className="faq-answer">{each.answer}</p>
              </li>
            ))}
          </ul>
          <h1 className="about-vaccine-title">Facts</h1>
          <ul className="facts-list">
            {factsData.map(each => (
              <li key={each.banner} className="facts">
                {each.banner}
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#007BFF" height={30} width={30} />
    </div>
  )

  onClickToRedirectToHome = () => {
    const {history} = this.Props
    history.replace('/')
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dhyg2tdfb/image/upload/v1637986931/Group_7484_a35iey.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-heading">PAGE NOT FOUND</h1>
      <p className="failure-text">
        we’re sorry, the page you requested could not be found Please go back to
        the homepage
      </p>
      <button
        className="home-redirect-button"
        type="button"
        onClick={this.onClickToRedirectToHome}
      >
        Home
      </button>
    </div>
  )

  renderAboutResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="about-bg-container">{this.renderAboutResult()}</div>
        <Footer />
      </>
    )
  }
}
export default About
