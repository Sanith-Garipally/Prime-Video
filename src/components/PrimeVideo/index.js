import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = []
  const comedyMovies = []
  moviesList.forEach(object => {
    if (object.categoryId === 'ACTION') {
      actionMovies.push(object)
    } else {
      comedyMovies.push(object)
    }
  })
  return (
    <div className="bg-container">
      <img
        className="banner"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="movie-list-container">
        <h1 className="movies-head">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
      </div>
      <div className="movie-list-container">
        <h1 className="movies-head">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
