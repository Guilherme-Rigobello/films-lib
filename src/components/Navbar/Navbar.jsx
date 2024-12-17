// HOOK
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// ICONS
import { BiFilm, BiSearchAlt2 } from 'react-icons/bi';
//CSS
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }
  return (
    <nav id='navbar'>
      <div className='container-navbar d-flex justify-content-between align-items-center'>
        <h2 className='title'>
          <Link
            to='/'
            className='text-decoration-none d-flex align-items-center '
          >
            <BiFilm /> Films Lib
          </Link>
        </h2>
        <form className='d-flex' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Buscar filme...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type='submit' className='d-flex align-items-center'>
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
