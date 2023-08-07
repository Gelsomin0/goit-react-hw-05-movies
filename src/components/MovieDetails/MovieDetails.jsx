import { useState, useEffect, useRef, Suspense } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import getFetchData from "tools/fetchData";
import imageBaseURL from "tools/imageBaswURL";
import css from './MovieDetails.module.css';
import styled from 'styled-components';

const BackLocationButton = styled(Link)`
    padding: 7px 25px;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    background-color: #810000;
    border-radius: 4px;
    opacity: 1;

    &:hover {
        opacity: 0.85;
    }
`

const InfoLink = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    color: #680000;

    &:hover {
        text-decoration: underline;
        color: #165301;
    }
`

export default function MovieDetails() {
    const [fetchData, setFetchData] = useState({})
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        setFetchData({});
        const handleFetchData = async () => {
            try {
                await getFetchData('movieID', movieId)
                    .then((res) => {
                        setFetchData({ ...res });
                    })
            } catch (err) {
                return;
            }
        }

        handleFetchData();
    }, [movieId]);

    return (
        <>
            <BackLocationButton
                to={backLinkLocationRef.current}
            >Previous page</BackLocationButton>
            <div className={css.movie_container}>
                <div className={css.poster_section}>
                    {
                        fetchData.poster_path ?
                        <img
                            className={css.poster}
                                src={`${imageBaseURL()}${fetchData.poster_path}`}
                                alt='Poster'
                        />
                        : <p className={css.no_poster}>Poster for this film does not exist!</p>
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

            <p className={css.info_title}>Additional information:</p>
            <ul className={css.info_links_list}>
                <InfoLink to='credits'>Actors</InfoLink>
                <InfoLink to='reviews'>Reviews</InfoLink>
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>             
        </>
    ); 
}