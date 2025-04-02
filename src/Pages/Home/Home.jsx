import MovieCard from "../../components/MovieCard/MovieCard"

export default function Home() {
    let movies=[
        {id:"1",title:"title1",release_date:"2000"},
        {id:"2",title:"title1",release_date:"2000"},
        {id:"3",title:"title1",release_date:"2000"},
    ]
  return (
    <>
    <div className="container">
    <div className="home">
        <div className="movie-list d-flex gap-2 flex-wrap gap-5">
            {movies.map(m=> <MovieCard movie={m} key={m.id}/>)}
        </div>
    </div>
    </div>
    </>
  )
}
