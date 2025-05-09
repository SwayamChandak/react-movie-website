import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContexts'

function App() {
  const movieNum = 1;
  return (
    <>
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/fav" element={<Favourite />}/>
      </Routes>
    </main>
    </MovieProvider>
    </>
  );
}



export default App
