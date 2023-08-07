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
                        {profile_path ?
                            <img
                                className={css.cast_image}
                                src={`${imageBaseURL()}${profile_path}`}
                                alt=""
                            />
                            : <p className={css.is_no_photo}>
                                We have no photo of this actor. Sorry!
                            </p>
                        }
                        
                        <h4>{name}</h4>
                    </li>
                );
            })}
        </ul>
    );
}