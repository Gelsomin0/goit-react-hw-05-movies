import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getFetchData from "tools/fetchData";

export default function MovieDetails() {
    const [fetchData, setFetchData] = useState({})
    const { movieId } = useParams();
    useEffect(() => {
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
        console.log(fetchData);
    }, []);

    return (
        <div>
            
        </div>
    );
}