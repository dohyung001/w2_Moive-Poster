import './App.css'
import MovieList from '../src/components/MovieList'
import movies from '../src/components/movies'

function App() {

  return (

    <div style={{
      backgroundColor: 'rgb(34,38,76)',
      width: '100vw',
      height: '100%'
    }}>
      <MovieList movies={movies.results} />;
    </div>
  )
}

export default App;