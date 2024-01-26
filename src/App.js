import './App.css'
// import Home from './Home'

import Footer from './Footer'
// import {Link,Routes,Route } from 'react-router-dom'
// import Post from './Post'
// import Nav from './Nav'
const App = ({ search, setsearch, items, handledelete, length }) => {
  return (
    <div className='all'>
      <main >

        <Footer
          item={items}
          handledelete={handledelete}
          items={items.filter(item => ((item.title).toLowerCase()).includes(search.toLowerCase()) || ((item.body).toLowerCase()).includes(search.toLowerCase()))} />
      </main>

      <footer>
        <h3 className='list'>
          <img width="53" height="53" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/
          external-Post-social-media-vectorslab-glyph-vectorslab.png" alt="external-Post-social-media-vectorslab-glyph-vectorslab" />
          {length}  {length > 1 ? "POSTS" : "POST"}
        </h3>

      </footer>

    </div>
  )
}
export default App