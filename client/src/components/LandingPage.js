import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';


// use the prompt 'rafce' to make a boilerplate for a functional component

const LandingPage = () => {
 
  // eventually this will be a fetch request to the backend
  // also, once you get data from the database about latest jobs, you will want to limit the results
  const [currentPosts, setCurrentPosts] = useState([
    {
      id: 1,
      title: 'Babysitter needed Friday night',
      author: 'Lisa'
    },
    {
      id: 2,
      title: 'Babysitter needed Saturday night',
      author: 'Erich'
    },
    {
      id: 3,
      title: 'Need babysitter for 2 hours on Sunday',
      author: 'Joe'
    },
    {
      id: 4,
      title: 'Babysitter needed next Friday night',
      author: 'Mary'
    },
    {
      id: 5,
      title: 'Babysitter needed for graduation',
      author: 'No Name'
    }

   ])


  return (
    <>
      <div id='header' className='right flex-1'></div>
      <Nav />
      {/* <h1> Welcome to Find A Sitter! <span></span> </h1> */}

      <div id='posts'>
        <h1> Latest Jobs </h1>
        <Link to={{pathname: `/sitters`, data: currentPosts }}>Visit Sitters Page</Link>
        {currentPosts.map((post) => (
          <div className='singlePost'>
            <h2>{post.title}</h2>
            <p>Posted by: {post.author}</p>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default LandingPage;