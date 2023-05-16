import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MoviesSlider = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item

  return (
    <div className="popup-container">
      <Popup
        className="popup"
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img alt="thumbnail" src={thumbnailUrl} />
          </button>
        }
      >
        {close => (
          <>
            <div className="video-player-styling">
              <button
                data-testid="closeButton"
                type="button"
                className="trigger-cls-button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <ReactPlayer height="85%" width="90%" url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MoviesSlider
