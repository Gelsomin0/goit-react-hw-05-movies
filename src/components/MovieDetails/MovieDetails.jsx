import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import getFetchData from "tools/fetchData";
import imageBaseURL from "tools/imageBaswURL";
import css from './MovieDetails.module.css';

export default function MovieDetails() {
    const [fetchData, setFetchData] = useState({})
    const { movieId } = useParams();
    useEffect(() => {
        setFetchData([]);
        const handleFetchData = async () => {
            try {
                await getFetchData('movieID', movieId)
                    .then((res) => {
                        console.log(res);
                        setFetchData({ ...res });
                    })
            } catch (err) {
                console.log(err);
            }
        }

        handleFetchData();
    }, []);

    return (
        <>
            <div className={css.movie_container}>
                <div className={css.poster_section}>
                    {
                        fetchData.poster_path &&
                        <img
                            className={css.poster}
                            src={`${imageBaseURL()}${fetchData.poster_path}`}
                        />
                    }    
                </div>

                <div className={css.movie_info}>
                    <h2 className={css.film_title}>{fetchData?.title || fetchData?.name} 
                        {
                            fetchData.release_date &&
                            <span>{` (${fetchData.release_date.slice(0, 4)})`}</span>
                        }
                    </h2>
                    <p>Average vote: {fetchData?.vote_average}</p>
                    <p>Original language: {fetchData?.original_language}</p>

                    <h3 className={css.info_title}>Overview</h3>
                    <p>
                        {fetchData.overview && fetchData.overview}
                    </p> 
                    
                    <h3 className={css.info_title}>Genres</h3>
                    <ul className={css.genres_list}>{
                        fetchData.genres && 
                        fetchData.genres.map(({id, name}) => {
                            return <li key={id}>{name}</li>
                        })
                        }
                    </ul>
                </div>                
            </div>

            <p>Additional information</p>
            <ul>
                <Link to='credits'>Actors</Link>
                <Link to='reviews'>Reviews</Link>
            </ul>
            <Outlet /> 
        </>
    ); 
}