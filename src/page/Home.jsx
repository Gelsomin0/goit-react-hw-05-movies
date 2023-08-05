import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import getFetchData from "tools/fetchData";

export default function Home() {
    const [trandMovies, setTrandMovies] = useState([]);
    // const isFirstRender = useRef(true);

    useEffect(() => {
        const handleFetchData = async () => {
            try {
                await getFetchData('trend').then((res) => {
                    setTrandMovies([ ...res.results ]);
                    return;
                })    
            } catch (err) {
                console.log(err);
            }
        }
        handleFetchData();
    }, []);
    
    return (
        <ul>
            {trandMovies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie?.title || movie?.name}</Link>
                        <p>{movie.overview}</p>
                    </li>
                );
            })}
        </ul>
    );
}