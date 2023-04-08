import './index.css'

const CountryItem = props => {
  const {items, onClickVisit} = props
  const {id, name, isVisited} = items

  const onClickVisitButton = () => {
    onClickVisit(items, id)
  }

  return (
    <li className="list-item">
      <p className="heading">{name}</p>
      <div>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button
            type="button"
            onClick={onClickVisitButton}
            className="visit-button"
          >
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
