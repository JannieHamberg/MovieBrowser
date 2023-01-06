import React from 'react'
import './CarouselItem.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



const CarouselItem = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails ] = useState({})
    

    useEffect(() => {
        fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=03b494ebe50361cd87fe561b366ff9d4&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
            
        })
    }, [id])

    function renderMovieDetails() {
        if(movieDetails) {
            
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
           return (
            <>
    <Carousel fade className='CarouselMain'>
      <Carousel.Item>
        <img
          className="d-block CarouselImage"
          src={posterPath}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{movieDetails.original_title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block CarouselImage"
          src={posterPath}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block CarouselImage"
          src={posterPath}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
 
}
return renderMovieDetails()
} 





export default CarouselItem;
