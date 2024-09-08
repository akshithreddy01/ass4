import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../api';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
    const { movieId } = useParams();
    const { data: movie, isLoading, isError, error } = useQuery({
        queryKey: ['movie', movieId],
        queryFn: () => fetchMovieDetails(movieId)
    });

    if (isLoading) return <p>Loading movie details...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div className="movie-detail">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-poster" 
            />
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
