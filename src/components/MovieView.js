import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=03b494ebe50361cd87fe561b366ff9d4&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
            setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            //TODO:Deal with a possible missing image
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl =`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
           return (
            <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                <div className="container my-5">
                   <div className="row"> 
                    <div className="col-md-3">
                       <img src={posterPath} alt="..." className="img-fluid shadow rounded" onError={e => { e.currentTarget.src = 'https://i.ibb.co/2Wnszy4/errorimg.jpg'; }} / >
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>

                            {movieDetails.overview &&
                            <p className="lead"> {movieDetails.overview}</p>
                            }

                            {!movieDetails.overview &&
                            <p className="lead">Sorry, there is no available description for this movie.</p>
                            }
                            
                            <p className="fw-light">
                                Rating:<p className="fw-bold">{movieDetails.vote_average}/10 </p> 
                                Votes:<p className="fw-bold"> {movieDetails.vote_count} </p>
                                Release date:<p className="fw-bold">{movieDetails.release_date} </p>
                            </p>
                           
                            
                        </div>
                    </div>
                </div>
            </>

           ) 
        }
    } 

  return renderMovieDetails()
};

export default MovieView;
