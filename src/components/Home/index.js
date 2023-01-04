import {Component} from 'react'

import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'
import TotalStats from '../TotalStats'
import SearchResult from '../SearchResult'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    totalActiveCases: '',
    totalRecoveryCases: '',
    totalDecreasedCases: '',
    totalConfirmedCases: '',
    search: '',
    filtedSearch: [],
    stateInfo: [],
    loading: true,
  }

  componentDidMount() {
    this.getCasesDetails()
  }

  getCasesDetails = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      let confirmedCasesCount = 0
      let decreaseCasesCount = 0
      let recoverCasesCount = 0
      let activeCasesCount = 0

      statesList.forEach(state => {
        if (data[state.state_code]) {
          const {total} = data[state.state_code]
          confirmedCasesCount += total.confirmed ? total.confirmed : 0
          decreaseCasesCount += total.deceased ? total.deceased : 0
          recoverCasesCount += total.recovered ? total.recovered : 0
        }
      })
      activeCasesCount =
        confirmedCasesCount - (recoverCasesCount + decreaseCasesCount)

      const states = statesList.map(eachState => ({
        stateName: eachState.state_name,
        stateCode: eachState.state_code,
        confirmed: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.confirmed),
        recovered: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.recovered),
        deceased: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.deceased),
        other: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.other),
        population: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].meta.population),
      }))

      this.setState({
        totalActiveCases: activeCasesCount,
        totalConfirmedCases: confirmedCasesCount,
        totalDecreasedCases: decreaseCasesCount,
        totalRecoveryCases: recoverCasesCount,
        stateInfo: states,
        loading: false,
      })
    }
  }

  whenAscendingSortButtonClicked = () => {
    const {stateInfo} = this.state
    const sortedList = stateInfo.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x > y ? 1 : -1
    })
    this.setState({stateInfo: sortedList})
  }

  whenDescendingSortButtonClicked = () => {
    const {stateInfo} = this.state
    const sortedList = stateInfo.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x < y ? 1 : -1
    })
    this.setState({stateInfo: sortedList})
  }

  renderAllStatesList = () => {
    const {stateInfo} = this.state
    console.log(stateInfo)

    return (
      <div className="all-states-table">
        <div className="table-header">
          <div className="state-name-heading">
            <p className="table-header-title ">States/UT</p>
            <button
              className="order"
              type="button"
              onClick={this.whenAscendingSortButtonClicked}
            >
              <FcGenericSortingAsc size={20} />
            </button>
            <button
              className="order"
              type="button"
              onClick={this.whenDescendingSortButtonClicked}
            >
              <FcGenericSortingDesc size={20} />
            </button>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Confirmed</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Active</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Recovered</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Deceased</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Population</p>
          </div>
          <div className="other-tables-bar">
            <p className="table-header-title">Others</p>
          </div>
        </div>
        <div className="state-wise-data-container">
          <ul className="other-tables">
            {stateInfo.map(eachState => (
              <TotalStats key={eachState.stateCode} data={eachState} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderAllData = () => {
    const {
      totalActiveCases,
      totalConfirmedCases,
      totalDecreasedCases,
      totalRecoveryCases,
    } = this.state
    return (
      <div className="renderAllData-container">
        <div className="stats-block-column">
          <p className="stats-title red">Confirmed</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/conf_cof3e9.jpg"
            className="stats-icon"
            alt="country wide confirmed cases pic"
          />
          <p className="stats-number red">{totalConfirmedCases}</p>
        </div>

        <div className="stats-block-column">
          <p className="stats-title blue">Active</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/act_kq7nfx.jpg"
            className="stats-icon"
            alt="country wide active cases pic"
          />
          <p className="stats-number blue">{totalActiveCases}</p>
        </div>

        <div className="stats-block-column">
          <p className="stats-title green">Recovered</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/uyf_ndpqov.jpg"
            className="stats-icon"
            alt="country wide recovered cases pic"
          />

          <p className="stats-number green">{totalRecoveryCases}</p>
        </div>

        <div className="stats-block-column ">
          <p className="stats-title gray">Deceased</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/dese_tgak4e.jpg"
            className="stats-icon"
            alt="country wide deceased cases pic"
          />
          <p className="stats-number gray">{totalDecreasedCases}</p>
        </div>
      </div>
    )
  }

  onChangeSearch = event => {
    const searchItem = event.target.value
    const searchResults = statesList.filter(state =>
      state.state_name.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return this.setState({
      search: searchItem,
      filtedSearch: searchResults,
    })
  }

  showSearchResults = () => {
    const {filtedSearch} = this.state
    return (
      <ul className="search-result-container">
        {filtedSearch.map(eachData => (
          <SearchResult
            key={eachData.state_code}
            stateDetails={eachData}
            id={eachData.state_code}
          />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#0b69ff" height={30} width={30} />
    </div>
  )

  render() {
    const {search, filtedSearch, loading} = this.state
    const showList = filtedSearch.length === 0 ? '' : this.showSearchResults()
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="sub-container">
            <div className="search-container">
              <BsSearch className="search-icon" />
              <input
                className="input"
                type="search"
                placeholder="Enter the State"
                onChange={this.onChangeSearch}
                value={search}
              />
            </div>
            {loading ? (
              this.renderLoadingView()
            ) : (
              <>
                {search.length > 0 ? showList : ''}
                {this.renderAllData()}
                <div className="container">{this.renderAllStatesList()}</div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
export default Home
