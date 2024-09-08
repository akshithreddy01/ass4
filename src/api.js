const API_KEY = '084667bc2ca5088729a5e143bd1b80b9';
const BASE_URL = 'https://api.themoviedb.org/3';
export const fetchPopMov = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to load movies. Please try again.');
    }
    const data = await res.json();
    return data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to load movie details. Please try again.');
    }
    const data = await res.json();
    return data;
};