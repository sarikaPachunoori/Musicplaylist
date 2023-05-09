import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Songs = props => {
  const {songDetails, deleteId} = props
  const {imageUrl, name, genre, id, duration} = songDetails

  const deleteSong = () => {
    deleteId(id)
  }

  return (
    <li className="item-cont">
      <div className="card-cont">
        <img src={imageUrl} className="card-img" alt="track" />
        <div className="names-cont">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="time-delte-cont">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          className="del-button"
          type="button"
          onClick={deleteSong}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default Songs
