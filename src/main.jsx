// HOOKS
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// PAGES
import Home from './pages/Home/Home.jsx'
import Movie from './pages/Movie/Movie.jsx'
import Search from './pages/Search/Search.jsx'
// CSS
import './index.css'
import App from './App.jsx'
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
