import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList

  return (
    <li className="destination-card-container">
      <img src={imgUrl} className="img-style" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
