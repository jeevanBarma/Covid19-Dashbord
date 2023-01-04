import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'
import StateTotalData from '../StateTotalData'
import ShowDistrictData from '../ShowDistrictData'

import ChartsData from '../ChartsData'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588929/Project/Group_7362_p5yrav.png',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663591465/Group_7354_wrtk63.png',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588673/Project/Group_7340_g0fbpz.png',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588680/Project/Group_7341_hq6q0p.png',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588617/Project/Group_7335_d6z1ss.png',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588921/Project/Group_7361_f7kuvj.png',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588836/Project/Group_7353_sfgcsy.png',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588875/Project/Group_7357_bccveg.png',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588886/Project/Group_7358_xk1uhg.png',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663591450/Group_7349_matsux.png',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588633/Project/Group_7337_pd5gwb.png',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588591/Project/Group_7332_l8kafa.png',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588948/Project/Group_7364_niviur.png',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588534/Project/Group_7328_on0rtt.png',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588692/Project/Group_7342_qy7ron.png',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588650/Project/Group_7339_zg5j58.png',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588860/Project/Group_7355_yw1woq.png',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588940/Project/Group_7363_ovtszr.png',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588900/Project/Group_7359_uemcvy.png',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588783/Project/Group_7350_myiups.png',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588626/Project/Group_7336_digaex.png',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588738/Project/Group_7346_cxs8ag.png',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588709/Project/Group_7344_de4y80.png',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    state_url: '',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588731/Project/Group_7345_fshbb3.png',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588700/Project/Group_7348_el9tcu.png',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588913/Project/Group_7360_q4sv4d.png',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588571/Project/Group_7330_vrijds.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588604/Project/Group_7333_g0qk9m.png',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588642/Project/Group_7338_van9x8.png',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588868/Project/Group_7356_r8vixn.png',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588801/Project/Group_7351_iswu1b.png',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588824/Project/Group_7352_lgkvqw.png',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588611/Project/Group_7334_c5vfmn.png',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663588580/Project/Group_7331_tndhn9.png',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    state_url:
      'https://res.cloudinary.com/dafhhfgcj/image/upload/v1663591458/Group_7343_v7tqtf.png',
  },
]

class StateSpecificRoute extends Component {
  state = {
    isLoading: true,
    activeTab: true,
    category: 'Confirmed',
    dataArray: [],
    eachStateTotalData: [],
    nameOfState: '',
    stateId: '',
    stateCode: '',
    totalTestedData: 0,
    stateImg: '',
    statePopulation: '',
    stateWiseTestedData: '',
    // date: '',
  }

  componentDidMount() {
    this.getAllStatesData()
  }

  getAllStatesData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const apiUrl = `https://apis.ccbp.in/covid19-state-wise-data/`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const stateTastedData = data[stateCode].total.tested
      const stateObject = statesList.filter(
        each => each.state_code === stateCode,
      )
      const eachState = data[stateCode].total
      const eachStatePopulation = data[stateCode].meta.population
      const eachStateTested = data[stateCode].total.tested
      const testedData = data[stateCode].meta.tested.date

      console.log(testedData)
      const stateName = stateObject[0].state_name
      const stateUrl = stateObject[0].state_url
      this.setState({
        isLoading: false,
        eachStateTotalData: eachState,
        totalTestedData: stateTastedData,
        nameOfState: stateName,
        stateId: stateCode,
        dataArray: data,
        stateCode,
        stateImg: stateUrl,
        statePopulation: eachStatePopulation,
        stateWiseTestedData: eachStateTested,
      })
    } else {
      console.log('Fetch Error')
    }
  }

  onGetCategory = categoryVal => {
    this.setState({category: categoryVal, activeTab: false})
  }

  renderLoader = () => (
    <>
      <div className="loader-container">
        <Loader type="Oval" color="blue" height={30} width={30} />
      </div>
    </>
  )

  getCategoryWiseData = () => {
    const {category, stateId, dataArray} = this.state
    const districtOutput = dataArray[stateId].districts
    const distNamesList = Object.keys(districtOutput)
    const categoryLower = category.toLowerCase()

    const categoryData = distNamesList.map(element => ({
      distName: element,
      value: districtOutput[element].total[categoryLower]
        ? districtOutput[element].total[categoryLower]
        : 0,
    }))

    categoryData.sort((a, b) => b.value - a.value)

    const activeCases = distNamesList.map(element => ({
      distName: element,
      value:
        districtOutput[element].total.confirmed -
        (districtOutput[element].total.recovered +
          districtOutput[element].total.deceased)
          ? districtOutput[element].total.confirmed -
            (districtOutput[element].total.recovered +
              districtOutput[element].total.deceased)
          : 0,
    }))
    activeCases.sort((a, b) => b.value - a.value)

    if (categoryLower === 'active') {
      return activeCases
    }
    return categoryData
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

  renderStateView = () => {
    const {
      activeTab,
      totalTestedData,
      eachStateTotalData,
      nameOfState,
      category,
      stateCode,
      stateImg,
      statePopulation,
      stateWiseTestedData,
    } = this.state

    const catdata = this.getCategoryWiseData()

    return (
      <>
        <div className="state-name-row">
          <h1 className="state-title">{nameOfState}</h1>

          <div className="testNo-container">
            <p className="test-title">Tested</p>
            <p className="testNo">{totalTestedData}</p>
          </div>
        </div>
        <div>
          <p className="last-date">Last Updated on {this.getCurrentDate()}</p>
        </div>
        <div className="align-center-row">
          <div className="country-stats">
            <StateTotalData
              onGetCategory={this.onGetCategory}
              eachStateTotalData={eachStateTotalData}
              active={activeTab}
            />
          </div>
        </div>
        <div className="state-img-data">
          <img className="state-img" src={stateImg} alt="img" />
          <div>
            <h1 className="ncp-heading">NCP report</h1>
            <div className="pop-test-container">
              <div>
                <h1 className="population-heading">Population</h1>
                <p className="population-number">{statePopulation}</p>
              </div>
              <div>
                <h1 className="population-heading">Tested</h1>
                <p className="population-number">{stateWiseTestedData}</p>
                <p className="tested-date">(As of 01 November per source)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="total-district-data-block">
          <h1 className={`district-heading ${category}-color`}>
            Top Districts
          </h1>
          <div className="ul-parent-list">
            <div className="district-data-ul-list">
              <ul className="districts-container">
                {catdata.map(each => (
                  <ShowDistrictData
                    key={each.distName}
                    number={each.value}
                    name={each.distName}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="graphs-data">
            <ChartsData stateCode={stateCode} category={category} />
          </div>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="single-state-main-container">
          <div className="state-content-container">
            {isLoading ? this.renderLoader() : this.renderStateView()}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default StateSpecificRoute
