import { useEffect, useState} from "react";

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
};

const API_URL = 'http://www.omdbapi.com?apikey=993282c3';
const App = () => {

    const [movies ,setMovies] = useState([]);

    const [SearchTerm , setSearchTerm] = useState([]);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);


    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="Search for movies"
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <img src={SearchIcon} alt="search" 
                 onClick={() => searchMovies(SearchTerm)} />
            </div>

            {movies.length > 0
                ? 
                    (<div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie1={movie} />
                        ))}
                    </div>
                ) : 
                (
                    <div className="empty">
                        <h2> No Movies Found</h2>
                    </div>
                )            
            }
           
        </div>
    );
}
export default App;