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
      description: 'I need a babysitter for my 2 year old son on Friday night from 7-9 pm. I will put him to sleep before you arrive.',
      author: 'Lisa',
      date: '3/5/2023',
      time: '7:16 PM'
    },
    {
      id: 2,
      title: 'Babysitter needed Saturday night',
      description: 'I am looking for a sitter for 3 kids ages 2, 4, and 6 on Saturday, March 11th from 6-10 pm.',
      author: 'Megan',
      date: '3-5-23',
      time: '5:23 PM'
    },
    {
      id: 3,
      title: 'Need babysitter for 2 hours on Sunday',
      description: 'I need a babysitter for my 4 year old son on Sunday, March 12th from 1-4 pm.',
      author: 'Matt',
      date: '3-4-23',
      time: '2:16 PM'
    },
    {
      id: 4,
      title: 'Babysitter needed next Friday night',
      description: 'I need a babysitter for my 2 year old son on Friday, march 10th from 7-9 pm. He will be asleep when you arrive.',
      author: 'Gaye',
      date: '3-3-23',
      time: '12:06 PM'
    },
    {
      id: 5,
      title: 'Babysitter needed for graduation',
      description: 'I am looking for a sitter for 3 kids ages 2, 5, and 7 on Saturday, March 11th from 6-10 pm.',
      author: 'Miguel',
      date: '3-1-23',
      time: '9:36 PM'
    }

   ])


  return (
    <>
      <div id='header' className='right flex-1'></div>
      <Nav />
      {/* <h1> Welcome to Find A Sitter! <span></span> </h1> */}

      <div id='posts'>
        <h1> Latest Jobs </h1>
        {/* <Link to={{pathname: `/sitters`, data: currentPosts }}>Visit Sitters Page</Link> */}
        {currentPosts.map((post) => (
          <div className='singlePost'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Posted by: {post.author} 
            {post.date} {post.time}</p>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default LandingPage;