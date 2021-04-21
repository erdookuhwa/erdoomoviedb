import React, {useState} from 'react'
import MovieCard from './MovieCard';

function SearchMovies() {

    // Managing States for query and movie
    const [query, setQuery] = useState('');

    const[movies, setMovies] = useState([])

    const searching = async (e) => {
        e.preventDefault();

        // const query = "Jurassic Park"
        // url
        // https://api.themoviedb.org/3/movie/550?api_key
        // myKey = 54f3169cc3a4bddd7d02aa523eba94bc

        // const url = ``

        const url = `https://api.themoviedb.org/3/search/movie?api_key=54f3169cc3a4bddd7d02aa523eba94bc&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);

            const data = await res.json();
            console.log(data.results)

            setMovies(data.results)

        } catch (err) {
            if (query.length < 1) {
                console.log('No movie name matches your search!', err)
            }
            

            // CONSIDER ALERTING ERROR INSTEAD OF CONSOLE so user can see what went wrong... ALSO, PREVENT ABILITY TO SEARCH IF NOTHING IS ENTERED SO AN ERROR PAGE OF CANNOT READ PPTY OF UNDEFINED DOESN'T POP up.
        }

    }


    return (

        <>
            <form className="form" onSubmit={searching}>
                <label className="label" htmlFor="query"><h2>Movie Name</h2></label>
                <input className="input" type="text" name="query" placeholder="e.g. Wonder Woman" 
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
                
            </div>
        </>
    )
}


export default SearchMovies;