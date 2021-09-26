import React, { useEffect, useState} from 'react'
import Movie from './components/Movie'

// const FEATURED_API = "saved on local machine because i haven't figured out .env and .gitignore yet";



// const SEARCH_API = "saved on local machine because i haven't figured out .env and .gitignore yet";
// const SEARCH_API = "saved on local machine because i haven't figured out .env and .gitignore yet"
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setMovies(data.results);
      });
  
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)

      setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleOnChange}
         />
      </form>
    </header>
    <div className="movie-container">
    {movies.length > 0 && movies.map(movie=> (
      <Movie key={movie.id} {...movie} />
    ))}
    </div>
    </>
  )
}

export default App