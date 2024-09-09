import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';
import './App.css'; 

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/popular-movies" element={<MovieList />} />
                    <Route path="/movie/:movieId" element={<MovieDetail />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
};

export default App;
