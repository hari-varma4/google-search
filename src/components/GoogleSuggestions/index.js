// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchinput: '',
  }

  onUpdate = value => {
    this.setState({
      searchinput: value,
    })
  }

  onSearch = event => {
    this.setState({
      searchinput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchinput} = this.state

    const filtered = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return (
      <div className="con">
        <div className="conn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="im"
            alt="google logo"
          />
          <div className="con2">
            <div className="ro">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                className="ii"
                placeholder="search google"
                onChange={this.onSearch}
                value={searchinput}
              />
            </div>
            <ul className="u">
              {filtered.map(each => (
                <SuggestionItem
                  each={each}
                  key={each.id}
                  onUpdate={this.onUpdate}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
