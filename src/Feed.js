import React from 'react'
import './App.css'

const Feed = ({ items, handledelete }) => {
  return (
    <div>
      {items.length ?
        (
          <ul className='apost'>{items.map((post) => (
            <li key={post.id}>

              <h2 className='posttitle'>{post.title}</h2>
              <h3 className='postdate'><img width="40" height="35" src="https://img.icons8.com/ios-filled/50/overtime.png" alt="overtime" />{post.datetime}</h3>
              {/* <p>{(post.des).length<5?post.body:`${(post.body).slice(0,5)}....`}</p>
                     */}
              <p className='postbody'>{(post.body) < 10 ? post.body : `${(post.body).slice(0, 189)}`}</p>
              <button className='postbtn' onClick={() => handledelete(post.id)}>Delete</button>
              <br /><br />
              <hr />

            </li>
          ))
          }
          </ul>
        ) : (<h2 className='lastt'><img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/sad.png" alt="sad" />No post...</h2>)}
    </div>
  )
}

export default Feed