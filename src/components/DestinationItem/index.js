import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationsList} = this.props
    const {imgUrl, name} = destinationsList

    return (
      <li className="destination-card-container">
        <img src={imgUrl} className="img-style" alt={name} />
        <p className="destination-name">{name}</p>
      </li>
  )
}
}

export default DestinationItem
