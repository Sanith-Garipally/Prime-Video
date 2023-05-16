import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {movies.map(object => (
        <MovieItem key={object.id} item={object} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
