import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';



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
      date: 'March 6th',
      time: '7:10 pm'
    },
    {
      id: 2,
      title: 'Babysitter needed Saturday night',
      description: 'I am looking for a sitter for 3 kids ages 2, 4, and 6 on Saturday, March 11th from 6-10 pm.',
      author: 'Megan',
      date: 'March 6th',
      time: '5:56 pm'
    },
    {
      id: 3,
      title: 'Need babysitter for 2 hours on Sunday',
      description: 'I need a babysitter for my 4 year old son on Sunday, March 12th from 1-4 pm.',
      author: 'Matt'
    },
    {
      id: 4,
      title: 'Babysitter needed next Friday night',
      description: 'I need a babysitter for my 2 year old son on Friday, march 10th from 7-9 pm. He will be asleep when you arrive.',
      author: 'Gaye',
      date: 'March 5th',
      time: '8:04 pm'
    },
    {
      id: 5,
      title: 'Babysitter needed for graduation',
      description: 'I am looking for a sitter for 3 kids ages 2, 5, and 7 on Saturday, March 11th from 6-10 pm.',
      author: 'Miguel',
      date: 'March 4th',
      time: '9:56 pm'
    }

   ])


  return (
    <>
      <div id='header' className='right flex-1'></div>
      <Nav />
      {/* <h1> Welcome to Find A Sitter! <span></span> </h1> */}

      <div id='landingPageBoxes'>
        <div id='loginForms'>
          <div id='signInBox'>
            <h1> Sign In </h1>
            <Form className="formInfo" id="signInForm">
                <Form.Group controlId="formEmail" className="formItem">
                  <Form.Label>Email address</Form.Label> 
                  <Form.Control placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formPassword" className="formItem">
                  <Form.Label>Password</Form.Label> 
                  <Form.Control placeholder="Enter password" />
                </Form.Group>
                <Button variant="secondary" type="submit" id="signupSubmit">
                  Sign In
                </Button>
            </Form>
          </div>
          <div id='signUpBox'>
            <h1> Sign Up </h1>
            <Form className="formInfo" id="signUpForm">
                <Form.Group controlId="formEmail" className="formItem">
                  <Form.Label>Email address</Form.Label> 
                  <Form.Control placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formName" className="formItem">
                  <Form.Label>Name</Form.Label> 
                  <Form.Control placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formPassword" className="formItem">
                  <Form.Label>Password</Form.Label> 
                  <Form.Control placeholder="Enter password" />
                </Form.Group>
                <Button variant="secondary" type="submit" id="signupSubmit">
                  Sign Up
                </Button>
            </Form>
          </div>


        </div>
        <div id='posts'>
          <h1> Latest Jobs </h1>
          {/* <Link to={{pathname: `/sitters`, data: currentPosts }}>Visit Sitters Page</Link> */}
          {currentPosts.map((post) => (
            <div className='singlePost'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Posted by: {post.author}</p>
              <p>Posted on: {post.date} at: {post.time}</p>
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default LandingPage;