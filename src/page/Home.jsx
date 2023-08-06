import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getFetchData from "tools/fetchData";
import styled from 'styled-components';

const Li = styled.li`
    color: #000;
    background-color: #f8f7f7;
    margin: 10px 0;
    padding: 7px 20px;
    border-radius: 7px;

    &:hover {
        color: #f8f7f7;
        background-color: #000;
    }
`

const StyledLink = styled(Link)`
    font-size: 18px;
    font-weight: 700;
    color: #606060;
    margin-left: 30px;
    margin-bottom: 8px;

    &:hover {
        color: #fff;
    }
`

export default function Home() {
    const [trandMovies, setTrandMovies] = useState([]);

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
                    <Li key={movie.id}>
                        <StyledLink to={`movies/${movie.id}`}>
                            {movie?.title || movie?.name}
                        </StyledLink>
                        <p>{movie.overview}</p>
                    </Li>
                );
            })}
        </ul>
    );
}