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
            })
    }, [movieId]);

    return (
        <ul className={css.reviews_list}>
            {reviews && reviews.map(({id, author, content}) => {
                return (
                    <li
                        key={id}
                        className={css.review_list_item}
                    >
                        <div><b>{author}</b></div>
                        <div className={css.review_content}>{content}</div>
                    </li>
                );
            })}

            {reviews.length === 0
                && <p className={css.no_review}>This is no review for this movie</p>
            }
        </ul>
    );
}