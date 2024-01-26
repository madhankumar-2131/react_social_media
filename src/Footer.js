import React from 'react'
import './App.css'
import Feed from './Feed'
const Footer = ({ items, handledelete }) => {
  return (
    <div>
      <main>

        <Feed items={items}
          handledelete={handledelete} />

      </main>
    </div>
  )
}

export default Footer