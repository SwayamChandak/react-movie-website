import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react";
import '../css/Home.css'
import { getPopularMovies, searchMovies } from "../services/api";


function Home(){
    
    const [searchQuery, setSearchQuery]=useState("");
    const [movies, setMovies]=useState([]);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);
    
    useEffect(()=>{
        const loadPopularMovies= async ()=> {
            try{
                const popularMovies =await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("failed to load movies")
            }
            finally{
                setLoading(false); 
            }
        }

        loadPopularMovies();
    }, []) //check if the array [] has changed after every render. if yes, run the function


    const handleSearch=async (e)=>{
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if(loading) return;
        
        setLoading(true);
        try{
            const searchRes=await searchMovies(searchQuery);
            setMovies(searchRes);
            setError(null)
            
        }
        catch(err){
            console.log(err);
            setError("Failed to search movies ")
        }
        finally{
            setLoading(false)
        }
        // setSearchQuery("")
    };
    return(
    <>
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="search movie" 
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">search</button>
            </form>
            
            {error && <div className="error-message"> {error} </div>}
            {loading ?(
                <div className="loading">loading</div>
            ):
            <div className="movies-grid">
                {movies.map(
                    (movie)=> 
                    (
                    <MovieCard movie={movie} key={movie.id} />

                    )
                )}
            </div>
            }
        </div>
    </>
    );
}

export default Home;