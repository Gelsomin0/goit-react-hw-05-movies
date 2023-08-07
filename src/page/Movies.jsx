import { useRef, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import searchMovieByKeyWord from "tools/searchMovieByKeyWord";

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState([]);
    const canFetch = useRef(false);
    const keyWord = searchParams.get('key_word') ?? '';
    const location = useLocation();

    const getSeatchList = () => {
        // setSearchParams('');

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

    useState(() => {
        if (!searchParams.get('key_word')) {
            return;
        }

        if (canFetch) {
            getSeatchList();
            canFetch.current = false;
        }

        console.log(searchParams.get('key_word'));
    }, []);

    return (
        <main>
            <form onSubmit={(e) => {
                e.preventDefault();
                getSeatchList();
                canFetch.current = true;
            }}>
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