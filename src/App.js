import "./App.css";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ControlledCarousel from "./components/CarouselItem";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Switch, Route } from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');


useEffect(() => {
    if(searchText) {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=03b494ebe50361cd87fe561b366ff9d4&language=en-US&query=${searchText}&page=1&include_adult=false`)
  .then(response => response.json())
  .then(data => {
    setSearchResults(data.results)
  })

  }
}, [searchText])


  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
          <ControlledCarousel />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
