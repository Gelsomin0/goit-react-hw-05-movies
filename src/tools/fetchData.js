export default function getFetchData(status, movieId) {
    const API_KEY = 'dae942d7f917cb306657f0b21582727c';
    const trendURL = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}?language=en-US`;
    const movieByIdURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWU5NDJkN2Y5MTdjYjMwNjY1N2YwYjIxNTgyNzI3YyIsInN1YiI6IjY0Y2UxM2I0MzAzYzg1MDEzYTE0OThlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jloHcITSMYU3dOLdrlXyzmDtDhX0pIxJmwVDJfF7NWE'
        }
    };

    if (status === 'trend') {
        return fetch(trendURL, options)
            .then(res => res.json())
    }

    if (status === 'movieID') {
        return fetch(movieByIdURL, options)
            .then(res => res.json())
    }
}
