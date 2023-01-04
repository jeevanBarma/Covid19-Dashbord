import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'

import './index.css'

const SearchResult = props => {
  const {stateDetails} = props

  return (
    <Link to={`/state/${stateDetails.state_code}`} className="link-search">
      <li className="search-list">
        <div className="search-result">
          <h1 className="search-result-heading">{stateDetails.state_name}</h1>
          <button type="button" className="search-button">
            {stateDetails.state_code}
            <BiChevronRightSquare
              testid="searchResultChevronRightIcon"
              alt="line icon"
              className="icon-right"
            />
          </button>
        </div>
      </li>
    </Link>
  )
}
export default SearchResult
