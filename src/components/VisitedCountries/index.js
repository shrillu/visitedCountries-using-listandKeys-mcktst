import './index.css'

const VisitedCountries = props => {
  const {visited, onClickRemoveItem} = props
  const {imageUrl, name, id} = visited

  const onClickRemove = () => {
    onClickRemoveItem(id)
  }

  return (
    <li className="list-item-v">
      <img src={imageUrl} alt="thumbnail" className="image-v" />
      <div className="l-c">
        <p>{name}</p>
        <div>
          <button
            type="button"
            className="remove-button"
            onClick={onClickRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
