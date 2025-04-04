import { useState } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"

export default function Home() {
  let [searchQuery,setSearchQuery]=useState("")
    let movies=[
        {id:"1",title:"title1",release_date:"2000"},
        {id:"2",title:"asljh",release_date:"2000"},
        {id:"3",title:"sb,t",release_date:"2000"},
    ]

    function handleSearch(e){
      e.preventDefault()
alert(searchQuery)
    }
  return (
    <>
    <div className="container">
    <div className="home">
    <form onSubmit={handleSearch} className="search-form my-5">
    <div className="input-group flex-nowrap">
 
  <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" 
  value={searchQuery}
  onChange={(e)=> setSearchQuery(e.target.value)}
  />
  <button type="submit" className="input-group-text" id="addon-wrapping">Search</button>
</div>
    </form>
        <div className="movie-list d-flex gap-2 flex-wrap gap-5">
            {movies.map((movie)=> 
            movie.title.toLowerCase().startsWith(searchQuery) &&(<MovieCard movie={movie} key={movie.id}/>)
            )}
        </div>
    </div>
    </div>
    </>
  )
}
