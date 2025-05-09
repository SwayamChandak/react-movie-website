import '../css/Favourite.css'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContexts'
function Favourite(){
    const {favorites}=useMovieContext()

    if(favorites)
    {
        return <>
        <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
                        {favorites.map(
                            (movie)=> 
                            (
                            <MovieCard movie={movie} key={movie.id} />
        
                            )
                        )}
                    </div>
                    </div> 
        </>
    }
    return(
        <>
        
        <div className="favorites-empty">
            <h2>no favourites found</h2>
            <p>add favourites and they will appear here</p>
            </div>
        </>
    )
}

export default Favourite