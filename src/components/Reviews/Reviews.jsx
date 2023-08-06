import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getFetchData from "tools/fetchData";
import css from './Reviews.module.css';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        getFetchData('review', movieId)
            .then((res) => {
                setReviews([...res.results]);
                console.log(res.results);
            })
    }, [])

    return (
        <ul className={css.reviews_list}>
            {reviews && reviews.map(({id, author, content}) => {
                return (
                    <li key={id}>
                        <div><u>The review of <b>{author}: </b></u></div>
                        <div>{content}</div>
                    </li>
                );
            })}

            {!reviews && <p>Is no reviews for this film!</p>}
        </ul>
    );
}