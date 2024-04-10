import { useState } from 'react';


export default function Movie({ movie }) {
  const [isHover, setIsHover] = useState(false); //hover상태


  return (
    <div className='movie'
      onMouseEnter={() => { setIsHover(true) }}
      onMouseLeave={() => { setIsHover(false) }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        style={{
          height: "300px", width: '200px', borderRadius: "6px", objectfit: "cover",
          borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"
        }} />
      <div className='movieInfo'>
        <div className='movieInfo_title'>{movie.title}</div>
        <div className='movieInfo_vote'>{movie.vote_average}</div>
      </div>

      <MovieCover movie={movie} isHover={isHover} setIsHover={setIsHover} />
    </div>
  );
}


//영화 설명 창
function MovieCover({ movie, isHover, setIsHover }) {
  return (
    <>
      {isHover && (
        <div className='movie_cover'>
          <div className='movie_cover_title'>{movie.title}</div>
          <div className='movie_cover_text'>{movie.overview}</div>
        </div>
      )}
    </>
  )

}