import './index.css'

const Card = props => {
  const {details, clicked} = props
  const {imageUrl, thumbnailUrl, id, category} = details
  const click = () => {
    clicked(id)
  }
  return (
    <ul>
      <li>
        <button onClick={click}>
          <img alt="thumbnail" className="image" src={thumbnailUrl} />
        </button>
      </li>
    </ul>
  )
}

export default Card
