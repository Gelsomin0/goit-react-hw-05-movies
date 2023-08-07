import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import searchMovieByKeyWord from "tools/searchMovieByKeyWord";

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState([]);
    const keyWord = searchParams.get('key_word') ?? '';
    const location = useLocation();

    const getSeatchList = (e) => {
        e.preventDefault();

        try {
            searchMovieByKeyWord(keyWord).then((res) => {
                setMoviesList([...res.results])
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateQueryString = ({target: {value}}) => {
        if (value === '') {
            return setSearchParams({});
        }

        setSearchParams({ key_word: value });
    }

    return (
        <main>
            <form onSubmit={getSeatchList}>
                <input
                    type="text"
                    onChange={updateQueryString}
                    value={keyWord ?? ''}
                />
                <button>Search</button>
            </form>
            <ul>
                {moviesList && moviesList.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <Link
                                to={`${movie.id}`}
                                state={{ from: location }}
                            >{movie.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}