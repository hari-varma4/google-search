// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {each, onUpdate} = props
  const {suggestion} = each
  const onArrow = () => {
    onUpdate(suggestion)
  }

  return (
    <li className="ll">
      <div className="r">
        <p className="h">{suggestion}</p>
        <button type="button" onClick={onArrow} className="ab">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            className="imgg"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
