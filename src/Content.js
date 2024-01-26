import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Content = ({ search, setsearch }) => {
  return (
    <nav className='Nav'>
      <form className='searchform' onSubmit={(e) => e.preventDefault()}>
        <label id='search-text'>search:</label>
        <input type="text" className='search-input' placeholder='Search Posts' required value={search} onChange={(e) => setsearch(e.target.value)} />
      </form>
      <ul>
        <li className='li'><Link to='/'>Home</Link></li>
        <li className='li'><Link to='/post'>Post</Link></li>
        <li className='li'> <Link to='/about'>About</Link></li>
      </ul>

    </nav>
  )
}

export default Content