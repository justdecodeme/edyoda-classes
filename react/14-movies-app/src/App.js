import axios from "axios"
import { useState, useEffect } from "react"
import MoviesNotFound from "./not-found.png"

const API_URL = "https://www.omdbapi.com/?apikey=45f0782a&s=war"

/* HOW `MOVIES` WILL LOOK AFTER SETMOVIES */
// const movies = [
// {
//   Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
//   Title: "Avengers: Infinity War",
//   Type: "movie",
//   Year: "2018",
//   imdbID: "tt4154756"
//   },
//   {
//   Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
//   Title: "Avengers: Infinity War",
//   Type: "movie",
//   Year: "2018",
//   imdbID: "tt4154756"
//   },
//   {
//   Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
//   Title: "Avengers: Infinity War",
//   Type: "movie",
//   Year: "2018",
//   imdbID: "tt4154756"
//   }
// ]

let allMovies = [];

function App() {
  const [movies, setMovies] = useState(null)
  const [clickedMovie, setclickedMovie] = useState(null)
  const [clickedId, setclickedId] = useState(null)
  const [error, setError] = useState(null)
  const [serchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get(API_URL).then(response => {
      allMovies = response.data.Search
      setMovies(response.data.Search)
      console.log(response)
    }).catch(err => setError(err.message))
  }, [])

  // console.log(movies)

  const filterMovies = (searchValue) => {
    if (movies) {
      setMovies(allMovies.filter(movie => movie.Title.toLowerCase().includes(searchValue)))
    }
  }

  const fetchMovie = (id) => {
    axios.get(API_URL).then(response => {
      setclickedId(id)
      setclickedMovie(response.data.Search.find(movie => movie.imdbID === id))
    }).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <input className={error ? 'error' : ''} value={error ? error : ''} type="text" placeholder="Search movies" onChange={(e) => filterMovies(e.target.value.toLowerCase())} />
      {/* {error ? <p>{error}</p>} */}
      <ul className="movies">
        {movies ?
          movies.length === 0 ?
            <li><img src={MoviesNotFound} /></li>
            : movies.map(movie =>
              <li key={movie.imdbID}>
                <a href="#" onClick={() => fetchMovie(movie.imdbID)}><img src={movie.Poster} /></a>
                <p>{movie.Title}</p>
                {clickedMovie && movie.imdbID === clickedId && <div>
                  {clickedMovie.Title}
                  <br />
                  {clickedMovie.Type}
                </div>}
              </li>
            )
          : <li><img src={MoviesNotFound} /></li>}
      </ul>
    </div>
  );
}

export default App;
