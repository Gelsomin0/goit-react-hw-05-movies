import { useState } from "react";
import { Link } from "react-router-dom";
import searchMovieByKeyWord from "tools/searchMovieByKeyWord";

export default function Movies() {
    const [searchQuery, setsearchQuery] = useState('');
    const [moviesList, setMoviesList] = useState([]);

    const handleSearchQuery = ({ target: { value } }) => {
        setsearchQuery(value);
    }

    const getSeatchList = (e) => {
        e.preventDefault();
        setsearchQuery('');

        try {
            searchMovieByKeyWord(searchQuery).then((res) => {
                setMoviesList([...res.results])
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <form onSubmit={getSeatchList}>
                <input
                    type="text"
                    onChange={handleSearchQuery}
                    value={searchQuery}
                />
                <button>Search</button>
            </form>
            <ul>
                {moviesList && moviesList.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`}>{movie.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}