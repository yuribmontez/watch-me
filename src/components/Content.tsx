import { Header } from "./Header"
import { MovieCard } from './MovieCard';
import { MovieProps } from '../App'

interface ContentProps {
  movies: Array<MovieProps>;
  genreTitle: string;
}

export function Content({ movies, genreTitle }: ContentProps) {
  return (
    <div className="container">
      <Header title={genreTitle} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
