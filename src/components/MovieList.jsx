import { useQuery } from '@tanstack/react-query';
import { fetchPopMov } from '../api';
import { Link } from 'react-router-dom';
import './MovieList.css'; 

const MovieList = () => {
    const { data: movies, isLoading, isError, error } = useQuery({
        queryKey: ['popularMovies'],
        queryFn: fetchPopMov
    });

    if (isLoading) return <h2>Loading movies...</h2>;
    if (isError) return <h2>Error: {error.message}</h2>;

    return (
        <div className="movie-list">
            <h1>Popular Movies</h1>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                        <div className="movie-info">
                            <h2>{movie.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
