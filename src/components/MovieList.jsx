import Movie from './Moive.jsx'

export default function MovieList({ movies }) {
  return (
    <div className='movieList'>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} /> //movie컴포넌트 생성
      ))}
    </div>
  );
}