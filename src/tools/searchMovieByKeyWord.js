export default function searchMovieByKeyWord(keyWord) {
    const API_KEY = 'dae942d7f917cb306657f0b21582727c';
    const searchMovieURL = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query
=${keyWord}&include_adult=false&language=en-US&page=1`;
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWU5NDJkN2Y5MTdjYjMwNjY1N2YwYjIxNTgyNzI3YyIsInN1YiI6IjY0Y2UxM2I0MzAzYzg1MDEzYTE0OThlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jloHcITSMYU3dOLdrlXyzmDtDhX0pIxJmwVDJfF7NWE'
        }
    };

    return fetch(searchMovieURL, options)
        .then(res => res.json())
}