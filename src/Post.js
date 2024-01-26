import React from 'react'
import './App.css'
// import { Link } from 'react-router-dom'
const Post = ({ posts, setpost, handlesubmit, newitem, setnewitem }) => {
  return (
    <main className='newpost'>

      <h2>New post</h2>
      <form onSubmit={handlesubmit}>
        <label id='input-title-letter'>Title:</label>
        <input type="text" id='input-title' placeholder='Post Title' required value={newitem} onChange={(e) => setnewitem(e.target.value)} />
      </form >
      <form>
        <textarea name="text" id="textarea" required placeholder='Text your Posts..' cols="30" rows="10" value={posts} onChange={(e) => setpost(e.target.value)}></textarea><br />
        <button id='input-button' onClick={handlesubmit}>SUBMIT</button>
      </form>
    </main>
  )
}



export default Post