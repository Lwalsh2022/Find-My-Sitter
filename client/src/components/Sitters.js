import React, { useState} from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';
import pfp from '../imgs/profileicon.jpg'
import '../sitter.css'

const Sitters = (props) => {

  // eventually this will be a fetch request to the backend
  // also, once you get data from the database about latest jobs, you will want to limit the results
  const [currentName, setName] = useState([
    {
      id: 1,
      firstName: 'Anna',
      lastName: 'Martinez',
      email: 'annamart123@gmail.com',
    },

  ])

  const [Certification, setCertification] = useState([
    {
      id: 1,
      certification: 'CPR'
    },
    {
      id: 2,
      certification: 'atrophysics'
    }
  ])
  const [Experience, setExperience] = useState([
    {
      id: 1,
      experience: 'Cooking'
    },
    {
      id: 2,
      experience: 'Great at math'
    }
  ])

  const [currentReview, setCurrentReview] = useState([
    {
      id: 1,
      review: 'Very Good',
      author: 'Lisa'
    },

  ])
  const location = useLocation();

  console.log("current posts data", props.location)
  return (
    <>
      <div className='header'>

        <h1 className='headerSize'> Sitter Profile </h1>
      </div> 
      <div className='navBar'>
        <h3 className='navBorder'><Nav /></h3>
      </div>
      {/* prfile picture / name / email code  */}
      <div className='flexPicture'>
        <img src={pfp} alt = "profile picture"></img>
        <div className='picName'> 
          {currentName.map((post) => (
            <div>
              <h1>{post.firstName} {post.lastName}</h1>
              <h1 className='email'>{post.email}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* certification code */}
      <div className='info'>        
        <div className='cert'>
          <h1> Certifications </h1>
          {Certification.map((post) => (
            <div>
              <li>{post.certification}</li>
            </div>
          ))}
        </div>
        {/* experience code  */}
        <div className='exp'>
          <h1> Experience </h1>
          {Experience.map((post) => (
            <div>
              <li>{post.experience}</li>
            </div>
          ))}
        </div>
      </div>
      {/* reviews code */}
      <div className='reviews'>
        <h1> Reviews </h1>
        {currentReview.map((post) => (
          <div className='singlePost'>
            <h2>{post.review}</h2>
            <p>Posted by: {post.author}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sitters;