import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <div className={css.movie_container}>
            <div>
                {
                    fetchData.poster_path &&
                    <img
                        className={css.poster}
                        src={`${imageBaseURL()}${fetchData.poster_path}`}
                    />
                }    
            </div>
            
            <h2>{fetchData?.title || fetchData?.name} 
                {
                    fetchData.release_date &&
                    <span>{` (${fetchData.release_date.slice(0, 4)})`}</span>
                }
            </h2>
        </div>
    ); 
}