// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestions, fillInput} = props

  const {suggestion} = suggestions

  const takeInput = () => {
    fillInput(suggestion)
  }

  return (
    <li className="search-item">
      <p className="search-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow-img"
        onClick={takeInput}
      />
    </li>
  )
}

export default SuggestionItem
