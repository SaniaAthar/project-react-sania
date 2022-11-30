import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const About = () => {
  const [showImage, setshowImage] = useState<boolean>(true)

  useEffect(() => {}, [showImage])

  return (
    <div>
      <h2>About us</h2>
      <div>
        {' '}
        Welcome to home decoration, your number one partner for all things from
        change of color to full decoration package. We are dedicated to provide
        you the very best of services, with a focus on simplicity yet elegant,
        stylish yet affordable, and without complication.
      </div>
      <br />
      <br />
      {showImage && (
        <img src="/images/about.jpg" height={'300px'} alt=" " />
      )}{' '}
      {showImage && <img src="/images/about2.jpeg" height={'300px'} alt=" " />}{' '}
      {showImage && <img src="/images/about3.jpg" height={'300px'} alt=" " />}{' '}
      {showImage && <img src="/images/about4.jpg" height={'300px'} alt=" " />}
      <br />
      <br />
      <button
        onClick={() => {
          setshowImage(!showImage)
        }}
      >
        Show hide image
      </button>
      <br />
      <br />
      <Link to="/" type="button" className="btn btn-dark">
        Back
      </Link>
    </div>
  )
}

export default About