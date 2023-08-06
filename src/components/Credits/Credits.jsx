import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getFetchData from "tools/fetchData";
import imageBaseURL from "tools/imageBaswURL";
import css from './Credits.module.css';

export default function Credits() {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        getFetchData('actor', movieId)
            .then((res) => {
                setActors([...res.cast]);
                console.log(res);
            })
    }, []);

    return (
        <ul className={css.cast_list}>
            {actors && actors.map(({id, name, profile_path}) => {
                return (
                    <li
                        className={css.cast_list_item}
                        key={id}
                    >
                        <img
                            className={css.cast_image}
                            src={`${imageBaseURL()}${profile_path}`}
                            alt=""
                        />
                        <h4>{name}</h4>
                    </li>
                );
            })}
        </ul>
    );
}