import Hero from "./Hero";
import { Link } from 'react-router-dom';
// TMDB API KEY = 03b494ebe50361cd87fe561b366ff9d4

const MovieCard = ({ movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  const overview = movie.overview
  const preview = overview.substring(0, 80);

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4 d-flex flex-shrink-0">
    <div className="card">
  <img src={posterUrl} className="card-img-top" alt={movie.original_title} onError={e => { e.currentTarget.src = 'https://i.ibb.co/tYYTYgB/errorim.jpg'; }} />
  <div className="card-body shadow">
    <h5 className="card-title">{movie.original_title}</h5>
    {preview &&
    <p className="card-text">{preview}...</p>
  }
    {!preview &&
          <p className="card-text">No description available.</p>
          }
    <Link to={detailUrl} className="btn btn-dark">Show details</Link>
  </div>
</div>
</div>

  )
}

const SearchView = ({ keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    
  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  if(resultsHtml.length>0){
    return(
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>
      </div>
      }
      </>
  )
    }
  else if(resultsHtml.length===0){
    return(
      <>
      <Hero text="No results found" />
      <p className="m-5"> Woops, seems we can't find any movie by that name.</p>
      </>
    )
  }
}


export default SearchView;
