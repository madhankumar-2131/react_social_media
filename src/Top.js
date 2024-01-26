import React from 'react'
import './App.css'
import About from './About'
import App from './App'
import Post from './Post'
import { Route, Routes } from 'react-router-dom'
import { format } from 'date-fns'
import { useState } from 'react'
import Content from './Content'
import Missing from './Missing'
const Top = () => {
  const [items, setitem] = useState(JSON.parse(localStorage.getItem('post'))
  )

  const [newitem, setnewitem] = useState('')
  const [posts, setpost] = useState('')
  const [search, setsearch] = useState('')
  const additem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd,yyyy pp');
    const adding = { id, title: newitem, datetime, body: posts };
    const add = [...items, adding]
    setitem(add)
    localStorage.setItem('post', JSON.stringify(add))
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!newitem) return;
    additem(newitem)
    setnewitem('')
    setpost('')
  }
  const handledelete = (id) => {
    const postu = items.filter((item) => item.id !== id)
    setitem(postu);
    localStorage.setItem('post', JSON.stringify(postu))
  }
  return (
    <div className='App'>

      <h1 className='header'>SOCIAL MEDIA<p><img width="50" height="50" src="https://img.icons8.com/ios/50/response.png" alt="response" /></p></h1>

      <Content search={search}
        setsearch={setsearch} />

      <Routes>

        <Route path='/' element={<App
          items={items}
          length={items.length}
          handledelete={handledelete}
          search={search}
          setsearch={setsearch} />} />
        <Route path='/post' element={<Post
          posts={posts}
          newitem={newitem}
          setnewitem={setnewitem}
          setpost={setpost}
          handlesubmit={handlesubmit}
        />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>

    </div>
  )
}

export default Top